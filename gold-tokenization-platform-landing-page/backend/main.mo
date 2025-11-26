import OrderedMap "mo:base/OrderedMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Float "mo:base/Float";
import Array "mo:base/Array";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";
import Migration "migration";

(with migration = Migration.run)
actor GoldTokenizationPlatform {
  transient let textMap = OrderedMap.Make<Text>(Text.compare);
  transient let natMap = OrderedMap.Make<Nat>(Nat.compare);

  var heroSection : Text = "Gold on the Blockchain";
  var tagline : Text = "Secure, transparent gold tokenization using blockchain technology";
  var howItWorksSteps : [Text] = [
    "Physical gold is verified and stored securely",
    "Gold is tokenized on the XRP Ledger",
    "Digital tokens represent real gold value",
    "Tokens can be traded or redeemed for physical gold",
  ];
  var relatedTechnologies : [Text] = ["RLUSD", "TAO (Bittensor)"];
  var callToAction : Text = "Explore or simulate gold tokenization now!";
  var colorPalette : [Text] = ["#FFD700", "#000000"];
  var designStyle : Text = "Modern, trustworthy, and elegant with smooth animations";
  var contentLanguage : Text = "English";

  var visualElements = textMap.fromIter<Text>(
    Iter.fromArray([
      ("heroVisual", "Gold bars transforming into digital tokens"),
      ("flowDiagram", "Step-by-step process from physical gold to digital tokens"),
      ("icons", "Simple icons representing each step"),
      ("blockchainElements", "Blockchain-inspired visual elements"),
    ])
  );

  // Gold Acquisition & Verification Agents Section
  var goldAgentsSectionTitle : Text = "Gold Acquisition & Verification Agents";
  var goldAgentsDescription : Text = "KSBC partners with accredited, insured gold dealers and vault operators to provide professional gold purchasing, purity testing, secure storage, and API-based verification for blockchain tokenization. All assets are fully insured and verified for authenticity.";
  var goldAgentServices : [Text] = [
    "Professional gold purchasing",
    "Purity & authenticity testing",
    "Secure vault storage",
    "API-based verification for blockchain tokenization",
    "Full insurance coverage",
  ];

  var goldAgentSubcards = textMap.fromIter<Text>(
    Iter.fromArray([
      (
        "alreadyHaveGold",
        "If You Already Have Gold: Ship your gold via insured courier to our accredited vaults for verification and secure storage."
      ),
      (
        "needToPurchaseGold",
        "If You Need to Purchase Gold: Our partners handle purchasing, automatic testing, registration, storage, and tokenization."
      ),
    ])
  );

  var goldAgentTrustStatement : Text = "KSBC is committed to working only with vetted, integrity-certified partners under our 'No Scam Zone' standard, ensuring the highest level of trust and security for all clients.";

  // Borrow Against Your Gold Section
  var borrowSectionTitle : Text = "Borrow Against Your Gold";
  var borrowSectionDescription : Text = "Use your tokenized gold as collateral to borrow funds through our KYC-approved lending service.";
  var borrowingSteps : [Text] = [
    "Complete identity verification (KYC)",
    "Collateralize your tokenized gold",
    "Calculate your loan amount",
    "Receive loan issuance",
    "Repay loan according to terms",
  ];
  var trustIndicators : [Text] = ["KYC Verified", "Secure Lending", "Trusted Platform"];
  var loanToValueRatio : Float = 0.7; // 70% LTV
  var interestRate : Float = 0.05; // 5% interest rate

  var loanCalculatorParams = textMap.fromIter<Float>(
    Iter.fromArray([
      ("loanToValueRatio", loanToValueRatio),
      ("interestRate", interestRate),
    ])
  );

  // Tokenization Flow Stages
  type TokenizationStage = {
    id : Text;
    title : Text;
    shortCaption : Text;
    description : Text;
    icon : Text;
    order : Nat;
  };

  var tokenizationStages = natMap.fromIter<TokenizationStage>(
    Iter.fromArray([
      (
        1,
        {
          id = "user";
          title = "User Stage";
          shortCaption = "User Initiation";
          description = "The user begins the tokenization process by submitting a request through the platform. This includes providing personal information, gold details, and agreeing to terms and conditions. The user is guided through the initial steps and receives instructions for gold verification and storage.";
          icon = "user-icon";
          order = 1;
        },
      ),
      (
        2,
        {
          id = "app";
          title = "App Stage";
          shortCaption = "Application Processing";
          description = "The application processes the user's request, validates the provided information, and initiates the verification workflow. This stage includes automated checks, KYC verification, and coordination with gold verification agents. The app ensures all requirements are met before proceeding to the next stage.";
          icon = "app-icon";
          order = 2;
        },
      ),
      (
        3,
        {
          id = "agent";
          title = "Agent Stage";
          shortCaption = "Agent Verification";
          description = "Accredited gold verification agents receive the request and coordinate the physical verification of the gold assets. This includes purity testing, authenticity checks, and secure transportation to accredited vaults. Agents provide verification reports and ensure compliance with industry standards.";
          icon = "agent-icon";
          order = 3;
        },
      ),
      (
        4,
        {
          id = "vault";
          title = "Vault Stage";
          shortCaption = "Vault Storage";
          description = "Verified gold is securely stored in accredited vaults with full insurance coverage. The vault stage includes detailed documentation, storage verification, and integration with the platform's API for real-time status updates. This ensures the physical backing of digital tokens.";
          icon = "vault-icon";
          order = 4;
        },
      ),
      (
        5,
        {
          id = "xrpl";
          title = "XRPL Stage";
          shortCaption = "Blockchain Minting";
          description = "The XRPL stage involves minting digital tokens on the XRP Ledger, representing the verified gold assets. This process includes token creation, registration, and integration with the platform's smart contracts. The blockchain ensures transparency, security, and traceability of all tokenized assets.";
          icon = "xrpl-icon";
          order = 5;
        },
      ),
      (
        6,
        {
          id = "wallet";
          title = "Wallet Stage";
          shortCaption = "Token Delivery";
          description = "In the final stage, digital tokens are delivered to the user's wallet, providing instant access to tokenized gold assets. Users can manage, trade, or use tokens as collateral for loans. The wallet stage ensures secure, user-friendly access to digital assets with full transparency and traceability.";
          icon = "wallet-icon";
          order = 6;
        },
      ),
    ])
  );

  // Articles & Tokenization Insights Section
  type Article = {
    id : Nat;
    title : Text;
    description : Text;
    content : Text;
    thumbnail : Text;
    category : Text;
    author : Text;
    publishedDate : Text;
    pdfBlob : ?Storage.ExternalBlob;
    diagramImage : ?Text;
    stages : ?[TokenizationStage];
  };

  var articles = natMap.fromIter<Article>(
    Iter.fromArray([
      (
        1,
        {
          id = 1;
          title = "KSBC Official Tokenization Flow Diagram";
          description = "Illustrated flow of the tokenization process from user to wallet.";
          content = "Step-by-step visual representation of the tokenization process: User → App → Agent → Vault → XRPL → Wallet. Includes detailed diagrams and explanations for each stage.";
          thumbnail = "tokenization-process.dim_1200x400.jpg";
          category = "Tokenization";
          author = "KSBC Team";
          publishedDate = "2024-06-01";
          pdfBlob = null;
          diagramImage = ?"tokenization-process.dim_1200x400.jpg";
          stages = ?Iter.toArray(natMap.vals(tokenizationStages));
        },
      ),
      (
        2,
        {
          id = 2;
          title = "Landing Page Rewrite – KSBC Gold Tokenization";
          description = "Professional explainer on KYC, vault backing, and XRPL security.";
          content = "Comprehensive overview of KSBC's gold tokenization process, emphasizing KYC compliance, secure vault backing, XRPL speed and security, and governance structure.";
          thumbnail = "gold-bars.dim_800x600.jpg";
          category = "Explainer";
          author = "KSBC Editorial";
          publishedDate = "2024-06-02";
          pdfBlob = null;
          diagramImage = null;
          stages = null;
        },
      ),
      (
        3,
        {
          id = 3;
          title = "Backend Architecture Outline";
          description = "Technical overview of the platform's backend components.";
          content = "Detailed breakdown of the backend architecture, including KYC Module, Gold Verification API, XRPL Token Minting Module, and Token Distribution system.";
          thumbnail = "backend-architecture.dim_800x600.jpg";
          category = "Technical";
          author = "KSBC Dev Team";
          publishedDate = "2024-06-03";
          pdfBlob = null;
          diagramImage = null;
          stages = null;
        },
      ),
      (
        4,
        {
          id = 4;
          title = "The No Scam Zone & The Kinetic Synchronized Blockchain Convergence";
          description = "KSBC's philosophy of transparency and synchronized blockchain governance.";
          content = "In-depth article on KSBC's commitment to transparency, truth, and synchronized blockchain governance. Highlights anti-fraud measures and trust-building initiatives.";
          thumbnail = "no-scam-zone.dim_800x600.jpg";
          category = "Philosophy";
          author = "KSBC Leadership";
          publishedDate = "2024-06-04";
          pdfBlob = null;
          diagramImage = null;
          stages = null;
        },
      ),
    ])
  );

  // Navigation State
  var currentSection : Text = "home";

  // Storage for PDF files
  let storage = Storage.new();
  include MixinStorage(storage);

  // PDF Management
  public func uploadPdf(articleId : Nat, blob : Storage.ExternalBlob) : async Bool {
    switch (natMap.get(articles, articleId)) {
      case (null) { false };
      case (?article) {
        let updatedArticle = { article with pdfBlob = ?blob };
        articles := natMap.put(articles, articleId, updatedArticle);
        true;
      };
    };
  };

  public query func getPdfBlob(articleId : Nat) : async ?Storage.ExternalBlob {
    switch (natMap.get(articles, articleId)) {
      case (null) { null };
      case (?article) { article.pdfBlob };
    };
  };

  // Section Queries
  public query func getHeroSection() : async Text {
    heroSection;
  };

  public query func getTagline() : async Text {
    tagline;
  };

  public query func getHowItWorksSteps() : async [Text] {
    howItWorksSteps;
  };

  public query func getRelatedTechnologies() : async [Text] {
    relatedTechnologies;
  };

  public query func getCallToAction() : async Text {
    callToAction;
  };

  public query func getColorPalette() : async [Text] {
    colorPalette;
  };

  public query func getDesignStyle() : async Text {
    designStyle;
  };

  public query func getContentLanguage() : async Text {
    contentLanguage;
  };

  public query func getVisualElements() : async [(Text, Text)] {
    Iter.toArray(textMap.entries(visualElements));
  };

  // Gold Acquisition & Verification Agents Queries
  public query func getGoldAgentsSectionTitle() : async Text {
    goldAgentsSectionTitle;
  };

  public query func getGoldAgentsDescription() : async Text {
    goldAgentsDescription;
  };

  public query func getGoldAgentServices() : async [Text] {
    goldAgentServices;
  };

  public query func getGoldAgentSubcards() : async [(Text, Text)] {
    Iter.toArray(textMap.entries(goldAgentSubcards));
  };

  public query func getGoldAgentTrustStatement() : async Text {
    goldAgentTrustStatement;
  };

  // Borrow Against Your Gold Section Queries
  public query func getBorrowSectionTitle() : async Text {
    borrowSectionTitle;
  };

  public query func getBorrowSectionDescription() : async Text {
    borrowSectionDescription;
  };

  public query func getBorrowingSteps() : async [Text] {
    borrowingSteps;
  };

  public query func getTrustIndicators() : async [Text] {
    trustIndicators;
  };

  public query func getLoanCalculatorParams() : async [(Text, Float)] {
    Iter.toArray(textMap.entries(loanCalculatorParams));
  };

  public query func calculateLoanAmount(tokenizedGoldAmount : Float) : async Float {
    tokenizedGoldAmount * loanToValueRatio;
  };

  public query func calculateRepaymentAmount(loanAmount : Float, termInMonths : Nat) : async Float {
    let interest = loanAmount * interestRate * (Float.fromInt(termInMonths) / 12.0);
    loanAmount + interest;
  };

  // Tokenization Flow Stages Queries
  public query func getTokenizationStages() : async [TokenizationStage] {
    Iter.toArray(natMap.vals(tokenizationStages));
  };

  public query func getTokenizationStageById(id : Text) : async ?TokenizationStage {
    let stages = Iter.toArray(natMap.vals(tokenizationStages));
    switch (Array.find(stages, func(stage : TokenizationStage) : Bool { stage.id == id })) {
      case (null) { null };
      case (?stage) { ?stage };
    };
  };

  // Articles & Tokenization Insights Queries
  public query func getAllArticles() : async [Article] {
    Iter.toArray(natMap.vals(articles));
  };

  public query func getArticleById(id : Nat) : async ?Article {
    natMap.get(articles, id);
  };

  public query func getArticlesByCategory(category : Text) : async [Article] {
    Iter.toArray(
      Iter.filter(
        natMap.vals(articles),
        func(article : Article) : Bool {
          article.category == category;
        },
      )
    );
  };

  public query func searchArticles(searchTerm : Text) : async [Article] {
    Iter.toArray(
      Iter.filter(
        natMap.vals(articles),
        func(article : Article) : Bool {
          Text.contains(article.title, #text searchTerm) or Text.contains(article.description, #text searchTerm) or Text.contains(article.content, #text searchTerm);
        },
      )
    );
  };

  // Navigation Queries
  public query func getCurrentSection() : async Text {
    currentSection;
  };

  public func navigateToSection(section : Text) : async () {
    currentSection := section;
  };

  public func backToHome() : async () {
    currentSection := "home";
  };
};

