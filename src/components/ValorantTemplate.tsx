
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Crosshair, Zap, Timer, Trophy, Users, Target } from "lucide-react";

const ValorantTemplate = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <Crosshair className="h-12 w-12 text-red-500" />
          <h2 className="text-4xl font-bold text-white">Valorant</h2>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          The modern tactical FPS that combines precise shooting with unique character abilities
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="secondary" className="bg-red-600/20 text-red-400 border-red-500/30">
            Tactical Shooter
          </Badge>
          <Badge variant="secondary" className="bg-red-600/20 text-red-400 border-red-500/30">
            Agent-Based
          </Badge>
          <Badge variant="secondary" className="bg-red-600/20 text-red-400 border-red-500/30">
            Modern Esports
          </Badge>
        </div>
      </div>

      {/* Game Overview */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-black/40 border-red-500/30">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Game Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white space-y-4">
            <div>
              <h4 className="font-semibold text-red-300 mb-2">Core Gameplay</h4>
              <p className="text-gray-300">
                Tactical FPS enhanced with unique agent abilities. Combines traditional shooting 
                mechanics with strategic ability usage, creating diverse gameplay possibilities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-red-300 mb-2">Key Features</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Agent abilities system</li>
                <li>• Precise shooting mechanics</li>
                <li>• Strategic round-based play</li>
                <li>• Spike defusal objective</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-red-500/30">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Competitive Scene
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white space-y-4">
            <div>
              <h4 className="font-semibold text-red-300 mb-2">Professional Play</h4>
              <p className="text-gray-300">
                Rapidly growing esports scene with international tournaments and 
                franchised leagues creating stable competitive ecosystem.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-red-300 mb-2">Major Tournaments</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• VCT Champions</li>
                <li>• VCT Masters</li>
                <li>• Regional Leagues</li>
                <li>• Game Changers</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agent Classes */}
      <Card className="bg-black/40 border-red-500/30">
        <CardHeader>
          <CardTitle className="text-red-400">Agent Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                class: "Duelist", 
                role: "Entry Fragger", 
                agents: ["Jett", "Reyna", "Phoenix", "Raze", "Yoru", "Neon"],
                color: "text-red-400"
              },
              { 
                class: "Initiator", 
                role: "Info Gatherer", 
                agents: ["Sova", "Breach", "Skye", "KAY/O", "Fade", "Gekko"],
                color: "text-yellow-400"
              },
              { 
                class: "Controller", 
                role: "Map Control", 
                agents: ["Brimstone", "Viper", "Omen", "Astra", "Harbor"],
                color: "text-blue-400"
              },
              { 
                class: "Sentinel", 
                role: "Defender", 
                agents: ["Sage", "Cypher", "Killjoy", "Chamber", "Deadlock"],
                color: "text-green-400"
              }
            ].map((agentClass) => (
              <div key={agentClass.class} className="bg-red-900/20 p-4 rounded-lg border border-red-500/30">
                <h4 className={`font-bold ${agentClass.color}`}>{agentClass.class}</h4>
                <p className="text-gray-400 text-sm mb-2">{agentClass.role}</p>
                <div className="space-y-1">
                  {agentClass.agents.map((agent) => (
                    <Badge key={agent} variant="outline" className="mr-1 mb-1 text-xs border-red-500/50 text-red-300">
                      {agent}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gameplay Mechanics */}
      <Card className="bg-black/40 border-red-500/30">
        <CardHeader>
          <CardTitle className="text-red-400 flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Gameplay Mechanics
          </CardTitle>
        </CardHeader>
        <CardContent className="text-white">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-red-300 mb-3">Shooting System</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>First Shot Accuracy</span>
                    <span>High</span>
                  </div>
                  <Progress value={95} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Spray Control</span>
                    <span>Moderate</span>
                  </div>
                  <Progress value={70} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Movement Penalty</span>
                    <span>Strict</span>
                  </div>
                  <Progress value={90} className="bg-gray-700" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-red-300 mb-3">Ability System</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Ability Impact</span>
                    <span>High</span>
                  </div>
                  <Progress value={85} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Utility Usage</span>
                    <span>Strategic</span>
                  </div>
                  <Progress value={90} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Cooldown Management</span>
                    <span>Important</span>
                  </div>
                  <Progress value={80} className="bg-gray-700" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-red-300 mb-3">Team Dynamics</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Role Synergy</span>
                    <span>Critical</span>
                  </div>
                  <Progress value={95} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Communication</span>
                    <span>Essential</span>
                  </div>
                  <Progress value={90} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Coordinate Executes</span>
                    <span>Vital</span>
                  </div>
                  <Progress value={85} className="bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Maps */}
      <Card className="bg-black/40 border-red-500/30">
        <CardHeader>
          <CardTitle className="text-red-400">Competitive Maps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Haven", type: "Three Sites", popularity: "Classic" },
              { name: "Bind", type: "Teleporters", popularity: "Strategic" },
              { name: "Split", type: "Vertical", popularity: "Technical" },
              { name: "Ascent", type: "Balanced", popularity: "Pro Pick" }
            ].map((map) => (
              <div key={map.name} className="bg-red-900/20 p-4 rounded-lg border border-red-500/30">
                <h4 className="font-bold text-red-300">{map.name}</h4>
                <p className="text-gray-400 text-sm">{map.type}</p>
                <Badge variant="outline" className="mt-2 border-red-500/50 text-red-400">
                  {map.popularity}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Game Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-black/40 border-red-500/30 p-6 text-center">
          <Timer className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">1:40</div>
          <div className="text-sm text-gray-400">Round Time</div>
        </Card>
        <Card className="bg-black/40 border-red-500/30 p-6 text-center">
          <Zap className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">128</div>
          <div className="text-sm text-gray-400">Tick Rate</div>
        </Card>
        <Card className="bg-black/40 border-red-500/30 p-6 text-center">
          <Target className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">25</div>
          <div className="text-sm text-gray-400">Max Rounds</div>
        </Card>
        <Card className="bg-black/40 border-red-500/30 p-6 text-center">
          <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">10</div>
          <div className="text-sm text-gray-400">Players</div>
        </Card>
      </div>
    </div>
  );
};

export default ValorantTemplate;
