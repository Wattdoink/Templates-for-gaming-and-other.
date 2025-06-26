
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import CounterStrikeTemplate from "@/components/CounterStrikeTemplate";
import ValorantTemplate from "@/components/ValorantTemplate";
import GameComparison from "@/components/GameComparison";
import { Target, Crosshair, Trophy, Users, Zap, Clock } from "lucide-react";

const Index = () => {
  const [activeTemplate, setActiveTemplate] = useState<"cs" | "valorant" | "comparison">("comparison");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-red-500/10" />
        <div className="relative container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
                FPS Gaming Hub
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the ultimate comparison between Counter-Strike: Global Offensive and Valorant
            </p>
          </div>

          {/* Template Switcher */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTemplate("cs")}
              variant={activeTemplate === "cs" ? "default" : "outline"}
              className={`px-6 py-3 text-lg transition-all duration-300 ${
                activeTemplate === "cs" 
                  ? "bg-orange-600 hover:bg-orange-700 text-white" 
                  : "border-orange-500 text-orange-400 hover:bg-orange-600/20"
              }`}
            >
              <Target className="mr-2 h-5 w-5" />
              Counter-Strike: GO
            </Button>
            <Button
              onClick={() => setActiveTemplate("valorant")}
              variant={activeTemplate === "valorant" ? "default" : "outline"}
              className={`px-6 py-3 text-lg transition-all duration-300 ${
                activeTemplate === "valorant" 
                  ? "bg-red-600 hover:bg-red-700 text-white" 
                  : "border-red-500 text-red-400 hover:bg-red-600/20"
              }`}
            >
              <Crosshair className="mr-2 h-5 w-5" />
              Valorant
            </Button>
            <Button
              onClick={() => setActiveTemplate("comparison")}
              variant={activeTemplate === "comparison" ? "default" : "outline"}
              className={`px-6 py-3 text-lg transition-all duration-300 ${
                activeTemplate === "comparison" 
                  ? "bg-purple-600 hover:bg-purple-700 text-white" 
                  : "border-purple-500 text-purple-400 hover:bg-purple-600/20"
              }`}
            >
              <Trophy className="mr-2 h-5 w-5" />
              Compare Games
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="bg-black/40 border-orange-500/30 p-4 text-center">
              <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">30M+</div>
              <div className="text-sm text-gray-400">CS:GO Players</div>
            </Card>
            <Card className="bg-black/40 border-red-500/30 p-4 text-center">
              <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">15M+</div>
              <div className="text-sm text-gray-400">Valorant Players</div>
            </Card>
            <Card className="bg-black/40 border-purple-500/30 p-4 text-center">
              <Zap className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">128</div>
              <div className="text-sm text-gray-400">Tick Rate (Pro)</div>
            </Card>
            <Card className="bg-black/40 border-blue-500/30 p-4 text-center">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-sm text-gray-400">Years Combined</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="animate-fade-in">
          {activeTemplate === "cs" && <CounterStrikeTemplate />}
          {activeTemplate === "valorant" && <ValorantTemplate />}
          {activeTemplate === "comparison" && <GameComparison />}
        </div>
      </div>
    </div>
  );
};

export default Index;
