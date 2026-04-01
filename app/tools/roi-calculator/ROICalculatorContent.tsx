'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { Calculator, Download, CalendarCheck } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ */
/*  Schema                                                            */
/* ------------------------------------------------------------------ */
const formSchema = z.object({
  teamSize: z.coerce
    .number()
    .min(1, 'Team size must be at least 1')
    .max(500, 'Team size must be 500 or less'),
  hoursPerWeek: z.coerce
    .number()
    .min(5, 'Minimum 5 hours')
    .max(40, 'Maximum 40 hours'),
  errorRate: z.coerce
    .number()
    .min(5, 'Minimum 5%')
    .max(50, 'Maximum 50%'),
  hourlyCost: z.coerce
    .number()
    .min(20, 'Minimum $20')
    .max(200, 'Maximum $200'),
  industry: z.string().min(1, 'Please select an industry'),
});

type FormValues = z.infer<typeof formSchema>;

/* ------------------------------------------------------------------ */
/*  Calculation helpers                                               */
/* ------------------------------------------------------------------ */
interface ROIResults {
  annualManualCost: number;
  automationSavings: number;
  errorCostSavings: number;
  totalSavings: number;
  efficiencyGain: number;
  paybackPeriod: number;
  barData: { name: string; amount: number }[];
  lineData: { month: string; savings: number }[];
}

function calculate(values: FormValues): ROIResults {
  const annualManualCost =
    values.teamSize * values.hoursPerWeek * 52 * values.hourlyCost;
  const automationSavings = annualManualCost * 0.6;
  const errorCostSavings =
    annualManualCost * (values.errorRate / 100) * 0.8;
  const totalSavings = automationSavings + errorCostSavings;
  const efficiencyGain = (totalSavings / annualManualCost) * 100;
  const implementationCost = annualManualCost * 0.15;
  const paybackPeriod = implementationCost / (totalSavings / 12);

  const monthlyCurrent = annualManualCost / 12;
  const monthlyProjected = (annualManualCost - totalSavings) / 12;

  const barData = [
    { name: 'Current Cost', amount: Math.round(monthlyCurrent) },
    { name: 'Projected Cost', amount: Math.round(monthlyProjected) },
  ];

  const monthlySavings = totalSavings / 12;
  const lineData = Array.from({ length: 12 }, (_, i) => ({
    month: `M${i + 1}`,
    savings: Math.round(monthlySavings * (i + 1) - implementationCost),
  }));

  return {
    annualManualCost: Math.round(annualManualCost),
    automationSavings: Math.round(automationSavings),
    errorCostSavings: Math.round(errorCostSavings),
    totalSavings: Math.round(totalSavings),
    efficiencyGain: Math.round(efficiencyGain),
    paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    barData,
    lineData,
  };
}

/* ------------------------------------------------------------------ */
/*  Animated counter                                                  */
/* ------------------------------------------------------------------ */
function AnimatedNumber({ value, prefix = '' }: { value: number; prefix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    const duration = 800;
    const start = ref.current ?? 0;
    const diff = value - start;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
    ref.current = value;
  }, [value]);

  return (
    <span>
      {prefix}
      {display.toLocaleString()}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Currency formatter for charts                                     */
/* ------------------------------------------------------------------ */
const fmt = (v: number) => `$${v.toLocaleString()}`;

/* ------------------------------------------------------------------ */
/*  Industries                                                        */
/* ------------------------------------------------------------------ */
const industries = ['Tech', 'Finance', 'Healthcare', 'Manufacturing', 'Other'];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export default function ROICalculatorContent() {
  const [results, setResults] = useState<ROIResults | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      teamSize: 10,
      hoursPerWeek: 20,
      errorRate: 15,
      hourlyCost: 75,
      industry: '',
    },
  });

  const hoursPerWeek = watch('hoursPerWeek');
  const errorRate = watch('errorRate');

  function onSubmit(values: FormValues) {
    setResults(calculate(values));
  }

  function handleDownload() {
    if (!results) return;
    alert(
      [
        '--- ROI Report Summary ---',
        `Annual manual cost: $${results.annualManualCost.toLocaleString()}`,
        `Projected annual savings: $${results.totalSavings.toLocaleString()}`,
        `Efficiency gain: ${results.efficiencyGain}%`,
        `Payback period: ${results.paybackPeriod} months`,
        '',
        'Contact us to get a detailed PDF report.',
      ].join('\n')
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Calculate Your Return on Investment
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how much time and money your organisation could save by
            automating manual processes with sbPowerDev.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Enter Your Details"
              subtitle="Fill in the fields below and we will estimate your potential savings."
              badge="ROI Calculator"
            />

            <Card className="mt-10">
              <CardContent className="p-6 md:p-8">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-6 md:grid-cols-2"
                >
                  {/* Team Size */}
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Input
                      id="teamSize"
                      type="number"
                      min={1}
                      max={500}
                      placeholder="e.g. 10"
                      {...register('teamSize')}
                    />
                    {errors.teamSize && (
                      <p className="text-xs text-destructive">
                        {errors.teamSize.message}
                      </p>
                    )}
                  </div>

                  {/* Average Hourly Cost */}
                  <div className="space-y-2">
                    <Label htmlFor="hourlyCost">
                      Average Hourly Cost ($)
                    </Label>
                    <Input
                      id="hourlyCost"
                      type="number"
                      min={20}
                      max={200}
                      placeholder="e.g. 75"
                      {...register('hourlyCost')}
                    />
                    {errors.hourlyCost && (
                      <p className="text-xs text-destructive">
                        {errors.hourlyCost.message}
                      </p>
                    )}
                  </div>

                  {/* Hours Per Week Slider */}
                  <div className="space-y-2">
                    <Label>
                      Hours per Week on Manual Tasks:{' '}
                      <span className="font-semibold text-primary">
                        {hoursPerWeek}h
                      </span>
                    </Label>
                    <Controller
                      name="hoursPerWeek"
                      control={control}
                      render={({ field }) => (
                        <Slider
                          min={5}
                          max={40}
                          step={1}
                          value={[field.value]}
                          onValueChange={(v) => field.onChange(v[0])}
                        />
                      )}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5h</span>
                      <span>40h</span>
                    </div>
                  </div>

                  {/* Error Rate Slider */}
                  <div className="space-y-2">
                    <Label>
                      Error Rate / Rework:{' '}
                      <span className="font-semibold text-primary">
                        {errorRate}%
                      </span>
                    </Label>
                    <Controller
                      name="errorRate"
                      control={control}
                      render={({ field }) => (
                        <Slider
                          min={5}
                          max={50}
                          step={1}
                          value={[field.value]}
                          onValueChange={(v) => field.onChange(v[0])}
                        />
                      )}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5%</span>
                      <span>50%</span>
                    </div>
                  </div>

                  {/* Industry */}
                  <div className="space-y-2 md:col-span-2">
                    <Label>Industry</Label>
                    <Controller
                      name="industry"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((ind) => (
                              <SelectItem key={ind} value={ind}>
                                {ind}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.industry && (
                      <p className="text-xs text-destructive">
                        {errors.industry.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2">
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate ROI
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="bg-muted/30 py-16 md:py-24"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <SectionHeading
                  title="Your Projected ROI"
                  subtitle="Based on the data you provided, here is what automation could do for your organisation."
                  badge="Results"
                />

                {/* KPI cards */}
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Projected Annual Savings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">
                        <AnimatedNumber
                          value={results.totalSavings}
                          prefix="$"
                        />
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Efficiency Gain
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">
                        <AnimatedNumber value={results.efficiencyGain} />%
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Payback Period
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">
                        {results.paybackPeriod}{' '}
                        <span className="text-lg font-normal text-muted-foreground">
                          months
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                  {/* Bar Chart */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Monthly Cost Comparison
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={results.barData}>
                            <CartesianGrid
                              strokeDasharray="3 3"
                              className="stroke-border"
                            />
                            <XAxis
                              dataKey="name"
                              tick={{ fontSize: 12 }}
                              className="fill-muted-foreground"
                            />
                            <YAxis
                              tickFormatter={fmt}
                              tick={{ fontSize: 12 }}
                              className="fill-muted-foreground"
                            />
                            <Tooltip
                              formatter={(v: number) => fmt(v)}
                              contentStyle={{
                                borderRadius: '0.5rem',
                                border: '1px solid hsl(var(--border))',
                                background: 'hsl(var(--popover))',
                                color: 'hsl(var(--popover-foreground))',
                              }}
                            />
                            <Bar
                              dataKey="amount"
                              radius={[6, 6, 0, 0]}
                              fill="hsl(var(--primary))"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Line Chart */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        12-Month Cumulative Savings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={results.lineData}>
                            <CartesianGrid
                              strokeDasharray="3 3"
                              className="stroke-border"
                            />
                            <XAxis
                              dataKey="month"
                              tick={{ fontSize: 12 }}
                              className="fill-muted-foreground"
                            />
                            <YAxis
                              tickFormatter={fmt}
                              tick={{ fontSize: 12 }}
                              className="fill-muted-foreground"
                            />
                            <Tooltip
                              formatter={(v: number) => fmt(v)}
                              contentStyle={{
                                borderRadius: '0.5rem',
                                border: '1px solid hsl(var(--border))',
                                background: 'hsl(var(--popover))',
                                color: 'hsl(var(--popover-foreground))',
                              }}
                            />
                            <Line
                              type="monotone"
                              dataKey="savings"
                              stroke="hsl(var(--primary))"
                              strokeWidth={2}
                              dot={{ r: 4, fill: 'hsl(var(--primary))' }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* CTAs */}
                <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" variant="outline" onClick={handleDownload}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      <CalendarCheck className="mr-2 h-4 w-4" />
                      Schedule a Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* CTA */}
      <PartnerCTA />
    </>
  );
}
