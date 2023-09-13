import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fetchQuestions } from '@/lib/queries/fetch-questions';
import { columns } from '@/components/ui/columns';
import { DataTable } from '@/components/data-table';
import { mockQuestions } from '@/lib/temp-data';
import { difficultyRatios } from '@/lib/formatting/diff-ratios';
import DonutChart from '@/components/donut-chart';
export default async function Dashboard() {
    // const questions = await fetchQuestions();
    // if (!questions) return;
    return (
        <>
            <section className="container flex flex-col gap-6 py-8 md:py-12">
                <div className="w-[min(80vw,70rem)] mx-auto flex flex-col gap-8">
                    <h1 className="text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
                        Dashboard
                    </h1>

                    <Tabs defaultValue="solved-problems">
                        <TabsList className="grid md:w-full grid-cols-2 md:grid-cols-4 h-full">
                            <TabsTrigger value="solved-problems">
                                Solved Problems
                            </TabsTrigger>
                            <TabsTrigger value="time-graph">
                                Time Graph
                            </TabsTrigger>
                            <TabsTrigger value="diff-ratios">
                                Difficulty Ratios
                            </TabsTrigger>
                            <TabsTrigger value="topic-freq">
                                Topic Frequencies
                            </TabsTrigger>
                        </TabsList>
                        <div className="pt-12">
                            <TabsContent value="solved-problems">
                                <DataTable
                                    columns={columns}
                                    data={mockQuestions}
                                />
                            </TabsContent>
                            <TabsContent value="time-graph">
                                Time graph for each difficulty
                            </TabsContent>
                            <TabsContent value="diff-ratios">
                                <div className="border border-solid border-stone-200 rounded-md">
                                    <DonutChart
                                        data={difficultyRatios(mockQuestions)}
                                    />
                                </div>
                            </TabsContent>
                            <TabsContent value="topic-freq">
                                Topic frequencies as columns of loading bars
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </section>
        </>
    );
}
