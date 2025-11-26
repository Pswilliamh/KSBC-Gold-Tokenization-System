import OrderedMap "mo:base/OrderedMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Storage "blob-storage/Storage";

module {
  type OldArticle = {
    id : Nat;
    title : Text;
    description : Text;
    content : Text;
    thumbnail : Text;
    category : Text;
    author : Text;
    publishedDate : Text;
    pdfBlob : ?Storage.ExternalBlob;
  };

  type OldActor = {
    heroSection : Text;
    tagline : Text;
    howItWorksSteps : [Text];
    relatedTechnologies : [Text];
    callToAction : Text;
    colorPalette : [Text];
    designStyle : Text;
    contentLanguage : Text;
    visualElements : OrderedMap.Map<Text, Text>;
    goldAgentsSectionTitle : Text;
    goldAgentsDescription : Text;
    goldAgentServices : [Text];
    goldAgentSubcards : OrderedMap.Map<Text, Text>;
    goldAgentTrustStatement : Text;
    borrowSectionTitle : Text;
    borrowSectionDescription : Text;
    borrowingSteps : [Text];
    trustIndicators : [Text];
    loanToValueRatio : Float;
    interestRate : Float;
    loanCalculatorParams : OrderedMap.Map<Text, Float>;
    articles : OrderedMap.Map<Nat, OldArticle>;
    currentSection : Text;
  };

  type TokenizationStage = {
    id : Text;
    title : Text;
    shortCaption : Text;
    description : Text;
    icon : Text;
    order : Nat;
  };

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

  type NewActor = {
    heroSection : Text;
    tagline : Text;
    howItWorksSteps : [Text];
    relatedTechnologies : [Text];
    callToAction : Text;
    colorPalette : [Text];
    designStyle : Text;
    contentLanguage : Text;
    visualElements : OrderedMap.Map<Text, Text>;
    goldAgentsSectionTitle : Text;
    goldAgentsDescription : Text;
    goldAgentServices : [Text];
    goldAgentSubcards : OrderedMap.Map<Text, Text>;
    goldAgentTrustStatement : Text;
    borrowSectionTitle : Text;
    borrowSectionDescription : Text;
    borrowingSteps : [Text];
    trustIndicators : [Text];
    loanToValueRatio : Float;
    interestRate : Float;
    loanCalculatorParams : OrderedMap.Map<Text, Float>;
    tokenizationStages : OrderedMap.Map<Nat, TokenizationStage>;
    articles : OrderedMap.Map<Nat, Article>;
    currentSection : Text;
  };

  public func run(old : OldActor) : NewActor {
    let natMap = OrderedMap.Make<Nat>(Nat.compare);

    let tokenizationStages = natMap.fromIter<TokenizationStage>(
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

    let articles = natMap.fromIter<Article>(
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

    {
      heroSection = old.heroSection;
      tagline = old.tagline;
      howItWorksSteps = old.howItWorksSteps;
      relatedTechnologies = old.relatedTechnologies;
      callToAction = old.callToAction;
      colorPalette = old.colorPalette;
      designStyle = old.designStyle;
      contentLanguage = old.contentLanguage;
      visualElements = old.visualElements;
      goldAgentsSectionTitle = old.goldAgentsSectionTitle;
      goldAgentsDescription = old.goldAgentsDescription;
      goldAgentServices = old.goldAgentServices;
      goldAgentSubcards = old.goldAgentSubcards;
      goldAgentTrustStatement = old.goldAgentTrustStatement;
      borrowSectionTitle = old.borrowSectionTitle;
      borrowSectionDescription = old.borrowSectionDescription;
      borrowingSteps = old.borrowingSteps;
      trustIndicators = old.trustIndicators;
      loanToValueRatio = old.loanToValueRatio;
      interestRate = old.interestRate;
      loanCalculatorParams = old.loanCalculatorParams;
      tokenizationStages;
      articles;
      currentSection = old.currentSection;
    };
  };
};

