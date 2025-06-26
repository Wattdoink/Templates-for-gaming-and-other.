
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, Crosshair, Timer, Trophy, Users, Zap } from "lucide-react";

const CounterStrikeTemplate = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <Target className="h-12 w-12 text-orange-500" />
          <h2 className="text-4xl font-bold text-white">Counter-Strike: Global Offensive</h2>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          The legendary tactical FPS that defined competitive gaming for over two decades
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="secondary" className="bg-orange-600/20 text-orange-400 border-orange-500/30">
            Tactical FPS
          </Badge>
          <Badge variant="secondary" className="bg-orange-600/20 text-orange-400 border-orange-500/30">
            5v5 Competitive
          </Badge>
          <Badge variant="secondary" className="bg-orange-600/20 text-orange-400 border-orange-500/30">
            Esports Legend
          </Badge>
        </div>
      </div>

      {/* Game Overview */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-black/40 border-orange-500/30">
          <CardHeader>
            <CardTitle className="text-orange-400 flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Game Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white space-y-4">
            <div>
              <h4 className="font-semibold text-orange-300 mb-2">Core Gameplay</h4>
              <p className="text-gray-300">
                Pure tactical shooter with no abilities. Victory depends on aim, positioning, 
                strategy, and teamwork. Each round matters in this economy-based competitive format.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-orange-300 mb-2">Key Features</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Weapon-based combat system</li>
                <li>• Economy management crucial</li>
                <li>• Map control and positioning</li>
                <li>• Spray pattern mastery</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-orange-500/30">
          <CardHeader>
            <CardTitle className="text-orange-400 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Competitive Scene
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white space-y-4">
            <div>
              <h4 className="font-semibold text-orange-300 mb-2">Professional Play</h4>
              <p className="text-gray-300">
                The gold standard of competitive FPS with massive tournaments, 
                legendary teams, and million-dollar prize pools.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-orange-300 mb-2">Major Tournaments</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• CS:GO Majors ($1M+ prize pools)</li>
                <li>• ESL Pro League</li>
                <li>• BLAST Premier Series</li>
                <li>• IEM Championships</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gameplay Mechanics */}
      <Card className="bg-black/40 border-orange-500/30">
        <CardHeader>
          <CardTitle className="text-orange-400 flex items-center gap-2">
            <Crosshair className="h-5 w-5" />
            Gameplay Mechanics
          </CardTitle>
        </CardHeader>
        <CardContent className="text-white">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-orange-300 mb-3">Movement System</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Strafe Jumping</span>
                    <span>Advanced</span>
                  </div>
                  <Progress value={85} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Bunny Hopping</span>
                    <span>Expert</span>
                  </div>
                  <Progress value={95} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Counter-Strafing</span>
                    <span>Essential</span>
                  </div>
                  <Progress value={100} className="bg-gray-700" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange-300 mb-3">Weapon Mastery</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Spray Control</span>
                    <span>Critical</span>
                  </div>
                  <Progress value={100} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Recoil Patterns</span>
                    <span>Essential</span>
                  </div>
                  <Progress value={90} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tap Shooting</span>
                    <span>Important</span>
                  </div>
                  <Progress value={80} className="bg-gray-700" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange-300 mb-3">Strategy Elements</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Economy Management</span>
                    <span>Crucial</span>
                  </div>
                  <Progress value={100} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Map Knowledge</span>
                    <span>Essential</span>
                  </div>
                  <Progress value={95} className="bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Team Coordination</span>
                    <span>Vital</span>
                  </div>
                  <Progress value={90} className="bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Maps */}
      <Card className="bg-black/40 border-orange-500/30">
        <CardHeader>
          <CardTitle className="text-orange-400">Iconic Maps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Dust2", type: "Desert", popularity: "Legendary" },
              { name: "Mirage", type: "Middle East", popularity: "Pro Favorite" },
              { name: "Inferno", type: "Italian Village", popularity: "Classic" },
              { name: "Cache", type: "Nuclear", popularity: "Tactical" }
            ].map((map) => (
              <div key={map.name} className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
                <h4 className="font-bold text-orange-300">{map.name}</h4>
                <p className="text-gray-400 text-sm">{map.type}</p>
                <Badge variant="outline" className="mt-2 border-orange-500/50 text-orange-400">
                  {map.popularity}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Game Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-black/40 border-orange-500/30 p-6 text-center">
          <Timer className="h-8 w-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">1:55</div>
          <div className="text-sm text-gray-400">Round Time</div>
        </Card>
        <Card className="bg-black/40 border-orange-500/30 p-6 text-center">
          <Zap className="h-8 w-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">64/128</div>
          <div className="text-sm text-gray-400">Tick Rate</div>
        </Card>
        <Card className="bg-black/40 border-orange-500/30 p-6 text-center">
          <Target className="h-8 w-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">30</div>
          <div className="text-sm text-gray-400">Max Rounds</div>
        </Card>
        <Card className="bg-black/40 border-orange-500/30 p-6 text-center">
          <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">10</div>
          <div className="text-sm text-gray-400">Players</div>
        </Card>
      </div>
    </div>
  );
};

export default CounterStrikeTemplate;
