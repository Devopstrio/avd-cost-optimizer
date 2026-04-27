import React from 'react';

// Devopstrio AVD Cost Optimizer
// Executive FinOps Dashboard

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-emerald-500/30">
            {/* Global Header */}
            <header className="border-b border-neutral-900 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center font-black text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                            FC
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-white tracking-tight">FINOPS COMMAND</h1>
                            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest leading-none mt-1">AVD Optimization Cluster</p>
                        </div>
                    </div>
                    <nav className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                        <a href="#" className="text-emerald-400 border-b-2 border-emerald-500 pb-8 pt-8">Executive View</a>
                        <a href="#" className="hover:text-emerald-200 transition-colors pt-8 pb-8">Host Pool Spend</a>
                        <a href="#" className="hover:text-emerald-200 transition-colors pt-8 pb-8">Savings Advisor</a>
                        <a href="#" className="hover:text-emerald-200 transition-colors pt-8 pb-8">Demand Forecast</a>
                        <a href="#" className="hover:text-emerald-200 transition-colors pt-8 pb-8">Carbon Score</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-8 py-10">

                {/* Real-time FinOps KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: 'Total Monthly Spend', value: '$142,402', change: '+2.1% MoM', color: 'slate' },
                        { label: 'Realized Savings', value: '$45,820', change: 'Autoscale Impact', color: 'emerald' },
                        { label: 'RI Utilization', value: '88.5%', change: 'Target: 95%', color: 'blue' },
                        { label: 'Carbon Intensity', value: '0.42kg', change: 'Per User/Hr', color: 'teal' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 hover:border-emerald-500/30 transition-all shadow-xl group">
                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{kpi.label}</span>
                            <div className="text-3xl font-black text-white mt-3 font-mono tracking-tighter">{kpi.value}</div>
                            <div className={`text-[10px] mt-4 font-bold ${kpi.color === 'emerald' ? 'text-emerald-400' : 'text-neutral-400'} flex items-center gap-2 uppercase tracking-widest`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${kpi.color === 'emerald' ? 'bg-emerald-400' : 'bg-neutral-600'}`}></span>
                                {kpi.change}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Primary Intelligence Section */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

                    {/* Cost Trend & Forecast Chart Placeholder Area */}
                    <div className="xl:col-span-2 bg-neutral-900 p-10 rounded-[2.5rem] border border-neutral-800 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h2 className="text-2xl font-black text-white tracking-tight">Spending Performance</h2>
                                <p className="text-neutral-400 text-sm mt-1">Multi-region cost aggregation with AI forecast projection.</p>
                            </div>
                            <div className="bg-black/40 p-1.5 rounded-xl border border-neutral-700 flex gap-2">
                                <button className="px-4 py-2 bg-emerald-600 text-white text-[10px] font-bold uppercase rounded-lg">Last 30 Days</button>
                                <button className="px-4 py-2 text-neutral-500 text-[10px] font-bold uppercase rounded-lg hover:text-white transition-colors">Forecasting</button>
                            </div>
                        </div>

                        {/* Simulated Chart Placeholder */}
                        <div className="h-[320px] w-full flex items-end gap-3 px-4">
                            {[42, 55, 38, 70, 85, 92, 45, 60, 75, 40, 58, 62, 88].map((val, idx) => (
                                <div key={idx} className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500/50 rounded-t-lg group relative transition-all hover:scale-x-110 flex flex-col justify-end" style={{ height: `${val}%` }}>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        ${(val * 1200).toLocaleString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-6 text-[10px] font-bold text-neutral-600 uppercase tracking-widest border-t border-neutral-800 pt-6">
                            <span>01 May</span>
                            <span>07 May</span>
                            <span>14 May</span>
                            <span>21 May</span>
                            <span>28 May</span>
                        </div>
                    </div>

                    {/* Optimization Advisor */}
                    <div className="bg-emerald-950/20 rounded-[2.5rem] border border-emerald-500/20 p-10 shadow-2xl relative group overflow-hidden">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-lg font-black text-emerald-400 uppercase tracking-wider">Optimizer Engine</h3>
                            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                        </div>

                        <div className="space-y-8">
                            {[
                                { title: 'D8s_v5 Rightsizing', savings: '$1,240', pool: 'US-East-Pool' },
                                { title: 'Idle Disk Cleanup', savings: '$420', pool: 'UK-Dev-Pool' },
                                { title: 'P30 to P20 Tiering', savings: '$850', pool: 'DE-Prod-Storage' }
                            ].map((rec, idx) => (
                                <div key={idx} className="relative pl-6 border-l-2 border-emerald-500/30">
                                    <div className="text-xs font-black text-white uppercase tracking-widest">{rec.title}</div>
                                    <div className="text-[10px] text-neutral-500 font-bold mt-1 uppercase tracking-wider">{rec.pool}</div>
                                    <div className="text-sm font-black text-emerald-400 mt-2 font-mono">Monthly: {rec.savings}</div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-12 bg-white text-black text-xs font-black py-4 rounded-2xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/10">
                            Apply All Optimization Logic
                        </button>

                        <div className="mt-8 p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/10">
                            <p className="text-[11px] text-emerald-100 font-medium leading-relaxed italic">
                                "Our AI projects that implementing these changes will offset 14% of your Q3 cloud budget."
                            </p>
                        </div>
                    </div>

                </div>

                {/* Sub-Intelligence Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                    <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 shadow-xl">
                        <h4 className="text-xs font-black text-neutral-500 uppercase tracking-widest mb-6 border-b border-neutral-800 pb-4">Sustainability Performance</h4>
                        <div className="flex items-center gap-10">
                            <div className="w-32 h-32 rounded-full border-8 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center relative shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                                <span className="text-2xl font-black text-white">92%</span>
                                <div className="absolute -bottom-2 bg-emerald-600 text-[8px] font-black px-2 py-0.5 rounded uppercase">Green Era</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                                    Your regional carbon density has dropped by 12% this month due to aggressive **Off-Peak Shutoffs** in Carbon Intensive regions.
                                </p>
                                <button className="mt-4 text-[10px] font-bold text-emerald-400 uppercase tracking-widest hover:underline decoration-2 underline-offset-4 transition-all">View Carbon Audit</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 shadow-xl">
                        <h4 className="text-xs font-black text-neutral-500 uppercase tracking-widest mb-6 border-b border-neutral-800 pb-4">License Efficiency Score</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-bold text-neutral-300">Microsoft 365 E5 Allocation</span>
                                <span className="text-xs font-mono text-neutral-500">2,450 / 3,000 Seats</span>
                            </div>
                            <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full w-[82%] shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                            </div>
                            <p className="text-[10px] text-neutral-500 font-medium leading-relaxed mt-2 uppercase tracking-tight">
                                550 unassigned licenses detected. FinOps Engine suggests reclaiming seats for deprovisioned contractors.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
