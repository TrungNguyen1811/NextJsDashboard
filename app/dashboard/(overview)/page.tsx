import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '../../ui/font';
import { Suspense } from 'react';
import {
  CardSkeleton,
  InvoiceSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};
export default async function Page() {
  // const totalInvoices = allInvoices.length;
  // const totalCustomers = allCustomers.length;
  return (
    <main className="flex flex-row">
      <SideNav />
      <div>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<InvoiceSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
