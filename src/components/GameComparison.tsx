
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Target, 
  Crosshair, 
  Zap, 
  Timer, 
  Trophy, 
  Users, 
  Gamepad2, 
  TrendingUp,
  DollarSign,
  Calendar,
  Star
} from "lucide-react";

const GameComparison = () => {
  const comparisonData = {
    gameplay: [
      { feature: "Shooting Mechanics", cs: 85, valorant: 80, description: "Precision and weapon handling" },
      { feature: "Movement System", cs: 95, valorant: 70, description: "Advanced movement techniques" },
      { feature: "Ability Usage", cs: 0, valorant: 90, description: "Character abilities impact" },
      { feature: "Economy System", cs: 95, valorant: 85, description: "Money management complexity" },
      { feature: "Map Knowledge", cs: 90, valorant: 85, description: "Required map understanding" },
      { feature: "Team Coordination", cs: 85, valorant: 90, description: "Teamwork requirements" }
    ],
    technical: [
      { feature: "Tick Rate", cs: "64/128", valorant: "128", winner: "tie" },
      { feature: "Round Time", cs: "1:55", valorant: "1:40", winner: "preference" },
      { feature: "Max Rounds", cs: "30", valorant: "25", winner: "cs" },
      { feature: "Buy Time", cs: "15s", valorant: "30s", winner: "valorant" },
      { feature: "Defuse Time", cs: "7/10s", valorant: "7s", winner: "tie" },
      { feature: "Plant Time", cs: "3.2s", valorant: "4s", winner: "cs" }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-4">
          <Target className="h-10 w-10 text-orange-500" />
          <span className="text-purple-400">VS</span>
          <Crosshair className="h-10 w-10 text-red-500" />
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive comparison between two titans of tactical FPS gaming
        </p>
      </div>

      {/* Quick Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border-orange-500/30">
          <CardHeader>
            <CardTitle className="text-orange-400 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Counter-Strike: Global Offensive
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Release Year:</span>
              <span className="text-orange-400 font-semibold">2012</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Developer:</span>
              <span className="text-orange-400 font-semibold">Valve</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Genre:</span>
              <span className="text-orange-400 font-semibold">Tactical FPS</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Skill Floor:</span>
              <span className="text-orange-400 font-semibold">High</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Skill Ceiling:</span>
              <span className="text-orange-400 font-semibold">Extreme</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-500/30">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <Crosshair className="h-6 w-6" />
              Valorant
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Release Year:</span>
              <span className="text-red-400 font-semibold">2020</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Developer:</span>
              <span className="text-red-400 font-semibold">Riot Games</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Genre:</span>
              <span className="text-red-400 font-semibold">Hero Shooter</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Skill Floor:</span>
              <span className="text-red-400 font-semibold">Medium</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Skill Ceiling:</span>
              <span className="text-red-400 font-semibold">Very High</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Comparison Tabs */}
      <Tabs defaultValue="gameplay" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-black/40">
          <TabsTrigger value="gameplay" className="data-[state=active]:bg-purple-600">
            Gameplay
          </TabsTrigger>
          <TabsTrigger value="technical" className="data-[state=active]:bg-purple-600">
            Technical
          </TabsTrigger>
          <TabsTrigger value="esports" className="data-[state=active]:bg-purple-600">
            Esports
          </TabsTrigger>
          <TabsTrigger value="community" className="data-[state=active]:bg-purple-600">
            Community
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gameplay" className="space-y-6">
          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-purple-400">Gameplay Mechanics Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {comparisonData.gameplay.map((item) => (
                  <div key={item.feature} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-white">{item.feature}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-orange-400">CS:GO</span>
                          <span className="text-orange-400">{item.cs}%</span>
                        </div>
                        <Progress value={item.cs} className="bg-gray-700 [&>div]:bg-orange-500" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-red-400">Valorant</span>
                          <span className="text-red-400">{item.valorant}%</span>
                        </div>
                        <Progress value={item.valorant} className="bg-gray-700 [&>div]:bg-red-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical" className="space-y-6">
          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-purple-400">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {comparisonData.technical.map((item) => (
                  <div key={item.feature} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-white font-medium">{item.feature}</span>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-orange-400 font-semibold">{item.cs}</div>
                        <div className="text-xs text-gray-400">CS:GO</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-400 font-semibold">{item.valorant}</div>
                        <div className="text-xs text-gray-400">Valorant</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="esports" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-black/40 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  CS:GO Esports
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white space-y-4">
                <div className="flex justify-between">
                  <span>Tournament History:</span>
                  <span className="text-orange-400">12+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span>Major Championships:</span>
                  <span className="text-orange-400">40+ Events</span>
                </div>
                <div className="flex justify-between">
                  <span>Prize Pool (2023):</span>
                  <span className="text-orange-400">$18M+</span>
                </div>
                <div className="flex justify-between">
                  <span>Peak Viewership:</span>
                  <span className="text-orange-400">2.7M</span>
                </div>
                <div className="flex justify-between">
                  <span>Tier 1 Teams:</span>
                  <span className="text-orange-400">50+</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Valorant Esports
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white space-y-4">
                <div className="flex justify-between">
                  <span>Tournament History:</span>
                  <span className="text-red-400">4 Years</span>
                </div>
                <div className="flex justify-between">
                  <span>Major Championships:</span>
                  <span className="text-red-400">12 Events</span>
                </div>
                <div className="flex justify-between">
                  <span>Prize Pool (2023):</span>
                  <span className="text-red-400">$8M+</span>
                </div>
                <div className="flex justify-between">
                  <span>Peak Viewership:</span>
                  <span className="text-red-400">1.5M</span>
                </div>
                <div className="flex justify-between">
                  <span>Franchised Teams:</span>
                  <span className="text-red-400">30</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Player Base
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-orange-400">CS:GO</span>
                    <span className="text-orange-400">30M+ Monthly</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-red-400">Valorant</span>
                    <span className="text-red-400">15M+ Monthly</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Content Creation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-orange-400">CS:GO Streamers</span>
                    <span className="text-orange-400">High</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-red-400">Valorant Streamers</span>
                    <span className="text-red-400">Very High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Growth Trend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-orange-400">CS:GO</span>
                    <span className="text-orange-400">Stable</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-red-400">Valorant</span>
                    <span className="text-red-400">Growing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Final Verdict */}
      <Card className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-purple-400 text-center text-2xl">The Verdict</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Both games excel in different areas. CS:GO offers pure tactical gameplay with incredible depth, 
            while Valorant combines tactical shooting with strategic ability usage. Your choice depends on 
            whether you prefer traditional mechanics or modern innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge className="bg-orange-600/20 text-orange-400 border-orange-500/30 text-lg px-4 py-2">
              CS:GO: Pure Skill Expression
            </Badge>
            <Badge className="bg-red-600/20 text-red-400 border-red-500/30 text-lg px-4 py-2">
              Valorant: Strategic Depth
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameComparison;
