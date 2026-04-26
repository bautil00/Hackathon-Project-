import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Pencil, CheckCircle2, AlertCircle, Clock, Check, X, Tag } from "lucide-react";

type Priority = "low" | "medium" | "high";

interface Task {
  id: string;
  title: string;
  priority: Priority;
  labels: string[];
}

const mockTasks: Task[] = [
  { id: "t1", title: "Finalize Database Schema", priority: "high", labels: ["Backend", "Q3"] },
  { id: "t2", title: "Update User Permissions", priority: "medium", labels: ["Security"] },
  { id: "t3", title: "Draft API Documentation", priority: "low", labels: ["Docs", "Review"] },
  { id: "t4", title: "Migrate Assets to CDN", priority: "high", labels: ["Infra", "Urgent"] },
  { id: "t5", title: "Client Kickoff Meeting", priority: "medium", labels: ["External"] },
];

export function DemoPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [projectTitle, setProjectTitle] = useState("Alpha Project Refactor");
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  
  // Tab state for the expanded task section
  const [activeTab, setActiveTab] = useState<"Cost" | "Success rate" | "Time" | "Communication">("Cost");

  const toggleTask = (id: string) => {
    setExpandedTaskId(prev => (prev === id ? null : id));
    setActiveTab("Cost"); // Reset tab when opening a new task
  };

  const priorityColor = (p: Priority) => {
    if (p === "high") return "bg-red-500";
    if (p === "medium") return "bg-yellow-500";
    return "bg-green-500";
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Cost":
        return (
          <div className="mt-4 text-sm font-['Inter']">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#AAB7B8]/20 text-[#AAB7B8]">
                  <th className="py-2 px-4 font-medium">Resource</th>
                  <th className="py-2 px-4 font-medium">Est. Cost</th>
                  <th className="py-2 px-4 font-medium">Actual Cost</th>
                  <th className="py-2 px-4 font-medium">Variance</th>
                </tr>
              </thead>
              <tbody className="text-[#F4F6F6]">
                <tr className="border-b border-[#AAB7B8]/10">
                  <td className="py-2 px-4">Development</td>
                  <td className="py-2 px-4">$12,000</td>
                  <td className="py-2 px-4">$11,500</td>
                  <td className="py-2 px-4 text-green-400">-$500</td>
                </tr>
                <tr className="border-b border-[#AAB7B8]/10">
                  <td className="py-2 px-4">Software Licenses</td>
                  <td className="py-2 px-4">$450</td>
                  <td className="py-2 px-4">$450</td>
                  <td className="py-2 px-4 text-gray-400">$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "Success rate":
        return (
          <div className="mt-4 text-sm font-['Inter']">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#AAB7B8]/20 text-[#AAB7B8]">
                  <th className="py-2 px-4 font-medium">Metric</th>
                  <th className="py-2 px-4 font-medium">Target</th>
                  <th className="py-2 px-4 font-medium">Current</th>
                  <th className="py-2 px-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-[#F4F6F6]">
                <tr className="border-b border-[#AAB7B8]/10">
                  <td className="py-2 px-4">Uptime</td>
                  <td className="py-2 px-4">99.9%</td>
                  <td className="py-2 px-4">99.95%</td>
                  <td className="py-2 px-4 text-green-400">Exceeding</td>
                </tr>
                <tr className="border-b border-[#AAB7B8]/10">
                  <td className="py-2 px-4">Bug-free Deploy</td>
                  <td className="py-2 px-4">100%</td>
                  <td className="py-2 px-4">95%</td>
                  <td className="py-2 px-4 text-yellow-400">At Risk</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "Time":
        return (
          <div className="mt-4 text-sm font-['Inter']">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#AAB7B8]/20 text-[#AAB7B8]">
                  <th className="py-2 px-4 font-medium">Phase</th>
                  <th className="py-2 px-4 font-medium">Start Date</th>
                  <th className="py-2 px-4 font-medium">End Date</th>
                  <th className="py-2 px-4 font-medium">Duration</th>
                </tr>
              </thead>
              <tbody className="text-[#F4F6F6]">
                <tr className="border-b border-[#AAB7B8]/10">
                  <td className="py-2 px-4">Planning</td>
                  <td className="py-2 px-4">Oct 1</td>
                  <td className="py-2 px-4">Oct 5</td>
                  <td className="py-2 px-4">4 Days</td>
                </tr>
                <tr className="border-b border-[#AAB7B8]/10">
                  <td className="py-2 px-4">Execution</td>
                  <td className="py-2 px-4">Oct 6</td>
                  <td className="py-2 px-4">Oct 20</td>
                  <td className="py-2 px-4">14 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "Communication":
        return (
          <div className="mt-4 text-sm font-['Inter']">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#AAB7B8]/20 text-[#AAB7B8]">
                  <th className="py-2 px-4 font-medium">Stakeholder</th>
                  <th className="py-2 px-4 font-medium">Channel</th>
                  <th className="py-2 px-4 font-medium">Frequency</th>
                  <th className="py-2 px-4 font-medium">Last Update</th>
                </tr>
              </thead>
              <tbody className="text-[#F4F6F6]">
                <tr className="border-b border-[#AAB7B8]/10">
                  <td className="py-2 px-4">Client Lead</td>
                  <td className="py-2 px-4">Email</td>
                  <td className="py-2 px-4">Weekly</td>
                  <td className="py-2 px-4">Oct 12</td>
                </tr>
                <tr className="border-b border-[#AAB7B8]/10">
                  <td className="py-2 px-4">Internal Team</td>
                  <td className="py-2 px-4">Slack</td>
                  <td className="py-2 px-4">Daily</td>
                  <td className="py-2 px-4">Today</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#1C2833] text-[#F4F6F6] font-['Inter'] overflow-hidden flex flex-col">
      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-[#000000] z-40"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-[#2E4053] border-r border-[#AAB7B8]/20 z-50 flex flex-col shadow-2xl"
            >
              <div className="p-4 border-b border-[#AAB7B8]/20 flex justify-between items-center">
                <span className="font-semibold uppercase tracking-widest text-[#AAB7B8] text-xs">Projects</span>
                <button onClick={() => setSidebarOpen(false)} className="text-[#AAB7B8] hover:text-[#F4F6F6]">
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-2">
                <div className="px-4 py-2 hover:bg-[#1C2833]/50 cursor-pointer text-sm transition-colors border-l-2 border-[#AAB7B8]">Alpha Project Refactor</div>
                <div className="px-4 py-2 hover:bg-[#1C2833]/50 cursor-pointer text-sm text-[#AAB7B8] transition-colors border-l-2 border-transparent">Beta Marketing Campaign</div>
                <div className="px-4 py-2 hover:bg-[#1C2833]/50 cursor-pointer text-sm text-[#AAB7B8] transition-colors border-l-2 border-transparent">Gamma Server Migration</div>
              </div>
              <div className="p-4 border-t border-[#AAB7B8]/20">
                <Link to="/login" className="block w-full py-2 bg-[#1C2833] text-center text-sm font-medium hover:bg-[#F4F6F6] hover:text-[#1C2833] transition-colors rounded-[1px] border border-[#AAB7B8]/20">
                  + Add Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#AAB7B8]/20 bg-[#1C2833]">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 text-[#AAB7B8] hover:text-[#F4F6F6] transition-colors border border-transparent hover:border-[#AAB7B8]/20 rounded-[1px]"
          >
            <Menu size={20} />
          </button>
          
          <div className="group relative flex items-center gap-2">
            {isEditingTitle ? (
              <input 
                autoFocus
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                onBlur={() => setIsEditingTitle(false)}
                onKeyDown={(e) => e.key === 'Enter' && setIsEditingTitle(false)}
                className="bg-[#2E4053] text-[#F4F6F6] px-2 py-1 rounded-[1px] border border-[#AAB7B8] focus:outline-none text-lg font-semibold w-64"
              />
            ) : (
              <>
                <h1 className="text-lg font-semibold tracking-tight text-[#F4F6F6]">{projectTitle}</h1>
                <button 
                  onClick={() => setIsEditingTitle(true)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-[#AAB7B8] hover:text-[#F4F6F6]"
                >
                  <Pencil size={14} />
                </button>
              </>
            )}
          </div>
        </div>
        <Link to="/" className="text-xs uppercase tracking-widest text-[#AAB7B8] hover:text-[#F4F6F6] transition-colors">
          Exit Demo
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="mb-8 font-['JetBrains_Mono'] text-xs text-[#AAB7B8] flex items-center gap-4 border-b border-[#AAB7B8]/20 pb-2">
            <span>[PROJECT_METADATA]</span>
            <span className="bg-[#2E4053] px-2 py-0.5 rounded-[1px]">STATUS: ACTIVE</span>
            <span>TASKS: {mockTasks.length}</span>
          </div>

          <div className="border border-[#AAB7B8]/20 rounded-[1px] bg-[#1C2833] shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center px-6 py-3 border-b border-[#AAB7B8]/20 bg-[#2E4053] text-xs font-semibold uppercase tracking-widest text-[#AAB7B8]">
              <div className="w-8 flex justify-center">Pri</div>
              <div>Task Name</div>
              <div>Labels</div>
            </div>

            {/* Task List */}
            <div className="flex flex-col">
              {mockTasks.map(task => (
                <div key={task.id} className="group flex flex-col border-b border-[#AAB7B8]/10 last:border-0">
                  <div 
                    onClick={() => toggleTask(task.id)}
                    className={`grid grid-cols-[auto_1fr_auto] gap-4 items-center px-6 py-4 cursor-pointer transition-colors ${expandedTaskId === task.id ? 'bg-[#2E4053]/50' : 'hover:bg-[#2E4053]/30'}`}
                  >
                    <div className="w-8 flex justify-center relative group/tooltip">
                      <div className={`w-3 h-3 rounded-full ${priorityColor(task.priority)} shadow-[0_0_8px_rgba(0,0,0,0.5)]`} />
                      {/* Tooltip */}
                      <div className="absolute left-8 flex items-center gap-1 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#F4F6F6] text-[#1C2833] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-[1px] pointer-events-none whitespace-nowrap z-10 shadow-lg">
                        {task.priority === "high" ? <><AlertCircle size={10} /> Urgent</> : task.priority === "medium" ? <><Clock size={10} /> Risk</> : <><CheckCircle2 size={10} /> Low Urgency</>}
                      </div>
                    </div>
                    <div className="font-medium text-[#F4F6F6] group-hover:text-white transition-colors text-sm sm:text-base">
                      {task.title}
                    </div>
                    <div className="flex gap-2">
                      {task.labels.map(lbl => (
                        <span key={lbl} className="font-['JetBrains_Mono'] text-[10px] sm:text-xs bg-[#2E4053] text-[#AAB7B8] px-2 py-0.5 rounded-[1px] border border-[#AAB7B8]/20 flex items-center gap-1">
                          <Tag size={10} /> {lbl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Summary */}
                  <AnimatePresence>
                    {expandedTaskId === task.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden bg-[#2E4053]/20 border-t border-[#AAB7B8]/10"
                      >
                        <div className="px-6 py-6 pl-16">
                          <div className="mb-6 max-w-3xl">
                            <h4 className="text-[#AAB7B8] text-xs font-semibold uppercase tracking-widest mb-2">Executive Summary</h4>
                            <p className="text-sm leading-relaxed text-[#D5DBDB]">
                              This task requires coordinating multiple departments to ensure all deliverables meet our strict quality guidelines. We've observed minor blockers regarding data consistency, but the core implementation remains on track. Focus should be directed towards resolving potential downstream dependencies prior to final review.
                            </p>
                          </div>
                          
                          <div className="border border-[#AAB7B8]/20 rounded-[1px] bg-[#1C2833] overflow-hidden">
                            {/* Dropdown for Metrics */}
                            <div className="p-4 border-b border-[#AAB7B8]/20 bg-[#2E4053]/50 flex items-center gap-4">
                              <label className="text-xs uppercase tracking-widest text-[#AAB7B8] font-semibold">View Metric:</label>
                              <div className="relative">
                                <select 
                                  value={activeTab}
                                  onChange={(e) => setActiveTab(e.target.value as any)}
                                  className="appearance-none bg-[#1C2833] border border-[#AAB7B8]/30 text-[#F4F6F6] text-xs font-semibold px-4 py-2 pr-8 rounded-[1px] focus:outline-none focus:border-[#F4F6F6] transition-colors"
                                >
                                  <option value="Cost">Cost</option>
                                  <option value="Success rate">Success rate</option>
                                  <option value="Time">Time</option>
                                  <option value="Communication">Communication</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#AAB7B8]">
                                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                              </div>
                            </div>
                            
                            {/* Selected Content Table */}
                            <div className="p-4 bg-[#1C2833]">
                              {renderTabContent()}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
