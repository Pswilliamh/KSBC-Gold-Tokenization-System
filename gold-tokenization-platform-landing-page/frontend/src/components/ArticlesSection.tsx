import { useState } from 'react';
import { useAllArticles } from '../hooks/useQueries';
import { ArrowLeft, BookOpen, Calendar, User, ExternalLink, Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import type { Article } from '../backend';

interface ArticlesSectionProps {
  onBackToHome: () => void;
}

export function ArticlesSection({ onBackToHome }: ArticlesSectionProps) {
  const { data: articles, isLoading } = useAllArticles();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const getArticleImage = (thumbnail: string) => {
    // Map backend thumbnail names to actual asset paths
    const imageMap: Record<string, string> = {
      'tokenization-process.dim_1200x400.jpg': '/assets/generated/tokenization-process.dim_1200x400.jpg',
      'gold-bars.dim_800x600.jpg': '/assets/generated/gold-bars.dim_800x600.jpg',
      'backend-architecture.dim_800x600.jpg': '/assets/generated/architecture-diagram.dim_800x600.png',
      'no-scam-zone.dim_800x600.jpg': '/assets/generated/article-card-background.dim_400x300.png',
    };
    return imageMap[thumbnail] || '/assets/generated/article-card-background.dim_400x300.png';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Tokenization: 'bg-gold/20 text-gold border-gold/50',
      Explainer: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      Technical: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      Philosophy: 'bg-green-500/20 text-green-400 border-green-500/50',
    };
    return colors[category] || 'bg-gold/20 text-gold border-gold/50';
  };

  const getFullArticleContent = (article: Article | null) => {
    if (!article) return '';
    
    // For "The No Scam Zone" article (id 4), return the full PDF content
    if (article.id === BigInt(4)) {
      return `THE NO SCAM ZONE & THE KINETIC SYNCHRONIZED BLOCKCHAIN CONVERGENCE

KSBC's Philosophy of Transparency and Synchronized Blockchain Governance

Introduction

In an era where blockchain technology promises decentralization and transparency, the reality often falls short. Scams, rug pulls, and fraudulent projects have plagued the cryptocurrency space, eroding trust and deterring legitimate innovation. The Kinetic Synchronized Blockchain Convergence (KSBC) emerges as a beacon of integrity, establishing "The No Scam Zone" – a revolutionary framework that prioritizes transparency, truth, and synchronized blockchain governance.

KSBC is not just another blockchain project; it is a comprehensive ecosystem designed to restore faith in digital assets through rigorous verification, real-world asset backing, and multi-chain synchronization. By tokenizing physical gold on the XRP Ledger (XRPL) and integrating with cutting-edge technologies like RLUSD and TAO (Bittensor), KSBC creates a trustworthy environment where users can confidently engage with blockchain-based financial instruments.

The Core Philosophy: Transparency and Truth

At the heart of KSBC lies an unwavering commitment to transparency. Every tokenized gold asset is backed by physical gold stored in accredited, insured vaults. This backing is not merely a promise but a verifiable reality, with API-based verification systems providing real-time proof of asset existence and authenticity.

Key Principles:

1. Verifiable Asset Backing: Every digital token represents a specific quantity of physical gold, verified through independent third-party audits and blockchain-recorded proof.

2. KYC Compliance: All participants undergo rigorous Know Your Customer (KYC) verification, ensuring that only legitimate actors can engage with the platform.

3. Transparent Operations: All transactions, vault holdings, and verification processes are recorded on-chain, providing an immutable audit trail accessible to all stakeholders.

4. Anti-Fraud Measures: KSBC employs advanced security protocols, including multi-signature wallets, smart contract audits, and continuous monitoring to prevent fraudulent activities.

Synchronized Blockchain Governance

KSBC's governance model is built on the principle of kinetic synchronization – the seamless coordination of multiple blockchain networks to ensure consistency, security, and efficiency. By leveraging the strengths of XRPL, RLUSD, and TAO, KSBC creates a unified ecosystem where governance decisions are transparent, democratic, and enforceable across all integrated chains.

Governance Structure:

1. Decentralized Decision-Making: Token holders participate in governance through a voting mechanism, ensuring that the community has a voice in platform development and policy changes.

2. Multi-Chain Coordination: Governance decisions are synchronized across XRPL, RLUSD, and TAO networks, ensuring consistent implementation and preventing fragmentation.

3. Oversight and Accountability: An independent oversight committee, composed of industry experts and community representatives, monitors governance processes and ensures adherence to KSBC's core principles.

4. Adaptive Governance: The governance framework is designed to evolve with technological advancements and regulatory changes, ensuring long-term sustainability and compliance.

The No Scam Zone: Building Trust Through Integrity

"The No Scam Zone" is more than a slogan; it is a binding commitment to operate with the highest standards of integrity. KSBC achieves this through:

Vetted Partnerships: All gold dealers, vault operators, and service providers undergo rigorous vetting processes, including background checks, financial audits, and compliance reviews.

Insurance Coverage: All physical gold holdings are fully insured, protecting users against loss, theft, or damage.

Real-Time Verification: Users can verify the existence and authenticity of their gold holdings at any time through the platform's API-based verification system.

Regulatory Compliance: KSBC adheres to all relevant financial regulations, including anti-money laundering (AML) and counter-terrorism financing (CTF) requirements.

Community Trust Indicators: The platform displays trust badges, security certifications, and audit reports, providing users with confidence in the platform's legitimacy.

Integration with XRPL, RLUSD, and TAO

KSBC's multi-chain approach leverages the unique strengths of each blockchain network:

XRP Ledger (XRPL): Known for its speed, low transaction costs, and robust security, XRPL serves as the primary platform for gold tokenization. Its consensus mechanism ensures fast finality and high throughput, making it ideal for real-time asset transfers.

RLUSD: As a stablecoin pegged to the US dollar, RLUSD provides a stable medium of exchange within the KSBC ecosystem. Users can seamlessly convert between gold tokens and RLUSD, facilitating liquidity and reducing volatility.

TAO (Bittensor): TAO's decentralized AI network enhances KSBC's verification and governance processes. By leveraging machine learning algorithms, TAO improves fraud detection, risk assessment, and predictive analytics, ensuring the platform remains secure and efficient.

The Borrowing Ecosystem: Collateralized Lending

KSBC extends its utility beyond simple tokenization by offering a KYC-approved lending service. Users can collateralize their tokenized gold to borrow funds, providing liquidity without selling their assets.

Lending Process:

1. Identity Verification: Users complete KYC verification to ensure compliance with regulatory requirements.

2. Gold Collateralization: Users lock their tokenized gold as collateral, with the loan amount determined by the current market value and a predefined loan-to-value (LTV) ratio.

3. Loan Issuance: Funds are disbursed in RLUSD or other supported currencies, providing immediate liquidity.

4. Repayment Terms: Users repay the loan according to agreed-upon terms, with interest rates determined by market conditions and risk assessments.

5. Collateral Release: Upon full repayment, the collateralized gold is released back to the user.

This lending mechanism provides users with financial flexibility while maintaining the security and integrity of the underlying assets.

Conclusion: A New Standard for Blockchain Integrity

The Kinetic Synchronized Blockchain Convergence represents a paradigm shift in how blockchain technology can be used to create trustworthy, transparent, and user-centric financial systems. By establishing "The No Scam Zone," KSBC sets a new standard for integrity in the digital asset space.

Through rigorous verification, real-world asset backing, multi-chain synchronization, and transparent governance, KSBC demonstrates that blockchain technology can fulfill its promise of decentralization without sacrificing security or trust. As the platform continues to evolve, it will serve as a model for future blockchain projects, proving that transparency and truth are not just ideals but achievable realities.

KSBC invites users, developers, and stakeholders to join this movement toward a more honest and reliable blockchain ecosystem. Together, we can build a future where digital assets are backed by real value, governed by transparent processes, and protected by unwavering integrity.

Welcome to The No Scam Zone. Welcome to KSBC.`;
    }
    
    return article.content;
  };

  const handleDownloadPdf = (article: Article | null) => {
    if (!article || !article.pdfBlob) return;
    
    // Get the direct URL from the ExternalBlob
    const pdfUrl = article.pdfBlob.getDirectURL();
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${article.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 bg-gradient-to-b from-background via-black/50 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FFD700 1px, transparent 1px), linear-gradient(to bottom, #FFD700 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 space-y-6">
            <Button
              variant="ghost"
              onClick={onBackToHome}
              className="text-gold hover:text-gold-light hover:bg-gold/10 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-gold">Knowledge Base</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                  Articles & Tokenization Insights
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Explore our comprehensive guides, technical documentation, and insights into the KSBC
                gold tokenization platform and blockchain governance.
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="bg-black/60 border-gold/20 animate-pulse">
                  <div className="h-48 bg-gold/10" />
                  <CardHeader>
                    <div className="h-6 bg-gold/10 rounded mb-2" />
                    <div className="h-4 bg-gold/10 rounded w-2/3" />
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-gold/10 rounded mb-2" />
                    <div className="h-4 bg-gold/10 rounded w-3/4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {articles?.map((article) => (
                <Card
                  key={article.id}
                  className="group bg-gradient-to-br from-black/80 to-black/60 border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] cursor-pointer overflow-hidden"
                  onClick={() => setSelectedArticle(article)}
                >
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getArticleImage(article.thumbnail)}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <Badge
                      className={`absolute top-4 right-4 ${getCategoryColor(article.category)}`}
                    >
                      {article.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl text-gold group-hover:text-gold-light transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {article.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.publishedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-gold group-hover:text-gold-light transition-colors">
                      <span className="text-sm font-medium">Read Article</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] bg-gradient-to-br from-black/95 to-black/90 border-gold/30">
          <DialogHeader>
            <div className="flex items-start gap-4 mb-4">
              <Badge className={getCategoryColor(selectedArticle?.category || '')}>
                {selectedArticle?.category}
              </Badge>
              <div className="flex-1">
                <DialogTitle className="text-3xl text-gold mb-2">
                  {selectedArticle?.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedArticle?.description}
                </DialogDescription>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-gold/20 pt-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{selectedArticle?.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {selectedArticle?.publishedDate
                    ? new Date(selectedArticle.publishedDate).toLocaleDateString()
                    : ''}
                </span>
              </div>
            </div>
          </DialogHeader>

          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-6">
              {/* Tokenization Flow Diagram Article - Enhanced with full content */}
              {selectedArticle?.id === BigInt(1) && selectedArticle?.diagramImage && (
                <div className="space-y-8">
                  {/* Main Diagram Image */}
                  <div className="rounded-lg overflow-hidden border-2 border-gold/40 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                    <img
                      src={`/assets/generated/${selectedArticle.diagramImage}`}
                      alt="KSBC Tokenization Flow Diagram"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Introduction */}
                  <div className="prose prose-invert prose-gold max-w-none">
                    <p className="text-foreground text-lg leading-relaxed">
                      {getFullArticleContent(selectedArticle)}
                    </p>
                  </div>

                  {/* Detailed Stage Explanations */}
                  {selectedArticle?.stages && selectedArticle.stages.length > 0 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gold border-b border-gold/30 pb-3">
                        Complete Tokenization Process
                      </h3>
                      
                      <div className="space-y-6">
                        {selectedArticle.stages
                          .sort((a, b) => Number(a.order) - Number(b.order))
                          .map((stage, index) => (
                            <div
                              key={stage.id}
                              className="relative p-6 rounded-lg bg-gradient-to-br from-gold/5 to-gold/10 border border-gold/30 hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                            >
                              {/* Stage Number Badge */}
                              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-black font-bold text-lg shadow-lg">
                                {index + 1}
                              </div>

                              {/* Stage Header */}
                              <div className="mb-4">
                                <h4 className="text-xl font-bold text-gold mb-1">
                                  {stage.title}
                                </h4>
                                <p className="text-gold-light text-sm font-medium italic">
                                  {stage.shortCaption}
                                </p>
                              </div>

                              {/* Stage Description */}
                              <p className="text-foreground leading-relaxed">
                                {stage.description}
                              </p>

                              {/* Arrow to next stage */}
                              {index < selectedArticle.stages!.length - 1 && (
                                <div className="flex justify-center mt-4">
                                  <ArrowRight className="w-6 h-6 text-gold/50" />
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Visual Flow Summary */}
                  <div className="rounded-lg bg-black/40 border border-gold/30 p-6">
                    <h4 className="text-lg font-bold text-gold mb-4 text-center">
                      Process Flow Summary
                    </h4>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      {selectedArticle?.stages
                        ?.sort((a, b) => Number(a.order) - Number(b.order))
                        .map((stage, index) => (
                          <div key={stage.id} className="flex items-center gap-2">
                            <div className="text-center">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold/50 flex items-center justify-center mb-2">
                                <span className="text-gold font-bold text-sm">
                                  {stage.id.toUpperCase()}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground max-w-[80px]">
                                {stage.shortCaption}
                              </p>
                            </div>
                            {index < (selectedArticle?.stages?.length || 0) - 1 && (
                              <ArrowRight className="w-5 h-5 text-gold/50 flex-shrink-0" />
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Other Articles - Standard Display */}
              {selectedArticle?.id !== BigInt(1) && (
                <>
                  {/* Article Image */}
                  <div className="rounded-lg overflow-hidden border border-gold/30">
                    <img
                      src={getArticleImage(selectedArticle?.thumbnail || '')}
                      alt={selectedArticle?.title}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-invert prose-gold max-w-none">
                    <div className="text-foreground leading-relaxed whitespace-pre-wrap">
                      {getFullArticleContent(selectedArticle)}
                    </div>
                  </div>

                  {/* Download PDF Button for "The No Scam Zone" article */}
                  {selectedArticle?.id === BigInt(4) && selectedArticle?.pdfBlob && (
                    <div className="flex justify-center pt-6 border-t border-gold/20">
                      <Button
                        onClick={() => handleDownloadPdf(selectedArticle)}
                        className="bg-gradient-to-r from-gold to-gold-light text-black hover:from-gold-light hover:to-gold font-semibold px-8 py-6 text-lg shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  )}

                  {/* Additional Visual Content Based on Article */}
                  {selectedArticle?.id === BigInt(2) && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gold">Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-gold/5 border border-gold/20">
                          <img
                            src="/assets/generated/kyc-badge-gold.dim_150x150.png"
                            alt="KYC"
                            className="w-12 h-12 mb-2"
                          />
                          <h4 className="font-semibold text-gold mb-1">KYC Compliance</h4>
                          <p className="text-sm text-muted-foreground">
                            Full identity verification for secure transactions
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-gold/5 border border-gold/20">
                          <img
                            src="/assets/generated/gold-bars.dim_800x600.jpg"
                            alt="Vault"
                            className="w-12 h-12 mb-2 rounded object-cover"
                          />
                          <h4 className="font-semibold text-gold mb-1">Vault Backing</h4>
                          <p className="text-sm text-muted-foreground">
                            Physical gold secured in certified vaults
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedArticle?.id === BigInt(3) && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gold">Architecture Components</h3>
                      <div className="rounded-lg overflow-hidden border border-gold/30">
                        <img
                          src="/assets/generated/architecture-diagram.dim_800x600.png"
                          alt="Architecture"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          'KYC Module',
                          'Gold Verification API',
                          'XRPL Token Minting Module',
                          'Token Distribution',
                        ].map((component, i) => (
                          <div key={i} className="p-4 rounded-lg bg-gold/5 border border-gold/20">
                            <h4 className="font-semibold text-gold mb-1">{component}</h4>
                            <p className="text-sm text-muted-foreground">
                              Core system component for secure operations
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}
