import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Globe, 
  Linkedin, 
  Mail, 
  Phone, 
  Building2,
  MapPin,
  Calendar,
  Award,
  Users,
  Briefcase
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-muted/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg backdrop-blur-sm bg-background/95">
        {/* Bannière */}
        <div className="relative h-32 bg-blue-600 rounded-t-lg">
          <div className="absolute -bottom-16 left-6 z-10">
            <div className="relative w-32 h-32 rounded-xl overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&fit=crop"
                alt="Photo de profil"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="p-6 pt-20 space-y-8">
          {/* En-tête avec Profil */}
          <div className="flex flex-col md:flex-row items-start gap-6 pb-6 border-b">
            <div className="text-left space-y-2 flex-1">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  John Doe
                </h1>
                <p className="text-xl text-muted-foreground">Ingénieur Logiciel Senior</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Building2 className="w-4 h-4" /> Tech Company Inc.
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Silicon Valley, CA
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Architecture Cloud</Badge>
              </div>
            </div>
          </div>

          {/* Actions Rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button className="w-full gap-2" variant="default">
              <Download className="w-4 h-4" />
              Enregistrer Contact
            </Button>
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Button>
            <Button variant="outline" className="gap-2">
              <Phone className="w-4 h-4" />
              Appeler
            </Button>
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              Planifier
            </Button>
          </div>

          {/* Onglets d'Information Détaillée */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="about">À propos</TabsTrigger>
              <TabsTrigger value="company">Entreprise</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="space-y-4 mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Award className="w-5 h-5" /> Expérience
                </h3>
                <div className="grid gap-4">
                  <div className="space-y-1">
                    <p className="font-medium">Ingénieur Logiciel Senior</p>
                    <p className="text-sm text-muted-foreground">Tech Company Inc. • 2020 - Présent</p>
                    <p className="text-sm">Direction du développement d'applications cloud-natives et architecture microservices.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Ingénieur Logiciel</p>
                    <p className="text-sm text-muted-foreground">Previous Corp • 2018 - 2020</p>
                    <p className="text-sm">Développement full-stack avec React et Node.js.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="company" className="space-y-6 mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940"
                      alt="Entreprise"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Tech Company Inc.</h3>
                    <p className="text-sm text-muted-foreground">L'Innovation par la Technologie</p>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span>Plus de 500 Employés dans le Monde</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                    <span>Solutions Logicielles Entreprise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-muted-foreground" />
                    <span>Présence Mondiale dans 15+ Pays</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="portfolio" className="space-y-6 mt-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426"
                      alt="Projet 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold">Plateforme Cloud</h4>
                  <p className="text-sm text-muted-foreground">Solution cloud à l'échelle entreprise</p>
                </Card>
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940"
                      alt="Projet 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold">Analytique IA</h4>
                  <p className="text-sm text-muted-foreground">Plateforme d'apprentissage automatique</p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Liens Sociaux */}
          <div className="flex justify-center gap-4 pt-4 border-t">
            <Button variant="ghost" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Globe className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>
    </main>
  );
}