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
import { Calculator, Download, CalendarCheck, Zap, ShieldCheck, Clock, TrendingDown, Repeat, Users } from 'lucide-react';
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
interface SavingsBreakdownItem {
  icon: 'zap' | 'shield' | 'clock' | 'trending-down' | 'repeat' | 'users';
  title: string;
  description: string;
  saving: number;
  percentage: number;
}

interface ROIResults {
  annualManualCost: number;
  automationSavings: number;
  errorCostSavings: number;
  totalSavings: number;
  efficiencyGain: number;
  paybackPeriod: number;
  implementationCost: number;
  barData: { name: string; amount: number }[];
  lineData: { month: string; savings: number }[];
  breakdown: SavingsBreakdownItem[];
  hoursFreedPerYear: number;
}

function calculate(values: FormValues): ROIResults {
  const annualManualCost =
    values.teamSize * values.hoursPerWeek * 52 * values.hourlyCost;

  // Breakdown: 6 specific areas of savings
  const workflowAutomation = annualManualCost * 0.30; // 30% — replacing manual repetitive tasks
  const errorElimination = annualManualCost * (values.errorRate / 100) * 0.8; // 80% of error costs eliminated
  const processAcceleration = annualManualCost * 0.15; // 15% — faster turnaround times
  const reportingAutomation = annualManualCost * 0.10; // 10% — automated dashboards replace manual reporting
  const approvalWorkflows = annualManualCost * 0.05; // 5% — automated routing and approvals
  const retrainingReduction = values.teamSize * 500; // ~$500/person/year saved on reduced onboarding

  const totalSavings = workflowAutomation + errorElimination + processAcceleration + reportingAutomation + approvalWorkflows + retrainingReduction;
  const efficiencyGain = (totalSavings / annualManualCost) * 100;
  const implementationCost = annualManualCost * 0.15;
  const paybackPeriod = implementationCost / (totalSavings / 12);
  const hoursFreedPerYear = Math.round(values.teamSize * values.hoursPerWeek * 52 * (totalSavings / annualManualCost));

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

  const breakdown: SavingsBreakdownItem[] = [
    {
      icon: 'zap',
      title: 'Workflow Automation',
      description: `Replace ${Math.round(values.hoursPerWeek * 0.6)}h/week of repetitive manual tasks per person with Power Automate flows — data entry, email routing, form processing, and approval chains run automatically.`,
      saving: Math.round(workflowAutomation),
      percentage: Math.round((workflowAutomation / totalSavings) * 100),
    },
    {
      icon: 'shield',
      title: 'Error & Rework Elimination',
      description: `Your current ${values.errorRate}% error rate costs $${Math.round(annualManualCost * values.errorRate / 100).toLocaleString()}/year. Automated validation, data checks, and standardized workflows eliminate 80% of these errors.`,
      saving: Math.round(errorElimination),
      percentage: Math.round((errorElimination / totalSavings) * 100),
    },
    {
      icon: 'clock',
      title: 'Process Acceleration',
      description: 'Tasks that took days now complete in minutes. Automated handoffs between departments, instant notifications, and parallel processing cut turnaround times by 60-80%.',
      saving: Math.round(processAcceleration),
      percentage: Math.round((processAcceleration / totalSavings) * 100),
    },
    {
      icon: 'trending-down',
      title: 'Reporting & Analytics Automation',
      description: 'Replace hours of manual Excel work with live Power BI dashboards. Auto-generated reports, scheduled email digests, and self-service analytics for your team.',
      saving: Math.round(reportingAutomation),
      percentage: Math.round((reportingAutomation / totalSavings) * 100),
    },
    {
      icon: 'repeat',
      title: 'Approval & Routing Workflows',
      description: 'Multi-level approvals that used to chase people via email now route automatically with SLA tracking, escalation rules, and mobile approvals.',
      saving: Math.round(approvalWorkflows),
      percentage: Math.round((approvalWorkflows / totalSavings) * 100),
    },
    {
      icon: 'users',
      title: 'Reduced Training & Onboarding',
      description: `Standardized digital processes mean new hires across your ${values.teamSize}-person team get up to speed faster. Built-in guides, templates, and automated SOPs reduce training time by 40%.`,
      saving: Math.round(retrainingReduction),
      percentage: Math.round((retrainingReduction / totalSavings) * 100),
    },
  ];

  return {
    annualManualCost: Math.round(annualManualCost),
    automationSavings: Math.round(workflowAutomation),
    errorCostSavings: Math.round(errorElimination),
    totalSavings: Math.round(totalSavings),
    efficiencyGain: Math.round(efficiencyGain),
    paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    implementationCost: Math.round(implementationCost),
    barData,
    lineData,
    breakdown,
    hoursFreedPerYear,
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
    mode: 'onBlur',
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

                {/* ══ HOW WE SAVE YOU MONEY — Breakdown ══ */}
                <div className="mt-14">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    How We Save You ${results.totalSavings.toLocaleString()}/year
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Here&apos;s exactly where the savings come from — no hand-waving, just concrete automation wins across your {results.hoursFreedPerYear.toLocaleString()} hours freed annually.
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    {results.breakdown.map((item) => {
                      const IconMap = {
                        'zap': Zap,
                        'shield': ShieldCheck,
                        'clock': Clock,
                        'trending-down': TrendingDown,
                        'repeat': Repeat,
                        'users': Users,
                      };
                      const Icon = IconMap[item.icon];
                      return (
                        <Card key={item.title} className="relative overflow-hidden">
                          <CardContent className="p-5">
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-4.5 h-4.5 text-secondary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                                  <span className="text-xs font-bold text-secondary flex-shrink-0">
                                    ${item.saving.toLocaleString()}/yr
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-2.5">
                                  {item.description}
                                </p>
                                {/* Progress bar showing share of total savings */}
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                                    <div
                                      className="h-full rounded-full bg-secondary/60"
                                      style={{ width: `${item.percentage}%` }}
                                    />
                                  </div>
                                  <span className="text-[10px] font-semibold text-muted-foreground">
                                    {item.percentage}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Implementation summary */}
                  <Card className="mt-4 border-secondary/20 bg-secondary/[0.03]">
                    <CardContent className="p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-sm font-bold text-foreground">Implementation Investment</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            One-time cost covering discovery, build, testing, training, and deployment.
                            You break even in <strong className="text-foreground">{results.paybackPeriod} months</strong>.
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-lg font-extrabold text-foreground">
                            ${results.implementationCost.toLocaleString()}
                          </div>
                          <div className="text-[10px] text-muted-foreground">estimated one-time</div>
                        </div>
                      </div>
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
