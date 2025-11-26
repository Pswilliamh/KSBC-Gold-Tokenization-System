import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Article } from '../backend';

export function useHeroSection() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['heroSection'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getHeroSection();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTagline() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['tagline'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getTagline();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useHowItWorksSteps() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['howItWorksSteps'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getHowItWorksSteps();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRelatedTechnologies() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['relatedTechnologies'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getRelatedTechnologies();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCallToAction() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['callToAction'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getCallToAction();
    },
    enabled: !!actor && !isFetching,
  });
}

// Gold Acquisition & Verification Agents hooks
export function useGoldAgentsSectionTitle() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['goldAgentsSectionTitle'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getGoldAgentsSectionTitle();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGoldAgentsDescription() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['goldAgentsDescription'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getGoldAgentsDescription();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGoldAgentServices() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['goldAgentServices'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGoldAgentServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGoldAgentSubcards() {
  const { actor, isFetching } = useActor();

  return useQuery<[string, string][]>({
    queryKey: ['goldAgentSubcards'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGoldAgentSubcards();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGoldAgentTrustStatement() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['goldAgentTrustStatement'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getGoldAgentTrustStatement();
    },
    enabled: !!actor && !isFetching,
  });
}

// Borrow Against Your Gold Section hooks
export function useBorrowSectionTitle() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['borrowSectionTitle'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getBorrowSectionTitle();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBorrowSectionDescription() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['borrowSectionDescription'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getBorrowSectionDescription();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBorrowingSteps() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['borrowingSteps'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBorrowingSteps();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTrustIndicators() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['trustIndicators'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTrustIndicators();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLoanCalculatorParams() {
  const { actor, isFetching } = useActor();

  return useQuery<[string, number][]>({
    queryKey: ['loanCalculatorParams'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLoanCalculatorParams();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCalculateLoanAmount(tokenizedGoldAmount: number) {
  const { actor, isFetching } = useActor();

  return useQuery<number>({
    queryKey: ['calculateLoanAmount', tokenizedGoldAmount],
    queryFn: async () => {
      if (!actor) return 0;
      return actor.calculateLoanAmount(tokenizedGoldAmount);
    },
    enabled: !!actor && !isFetching && tokenizedGoldAmount > 0,
  });
}

export function useCalculateRepaymentAmount(loanAmount: number, termInMonths: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<number>({
    queryKey: ['calculateRepaymentAmount', loanAmount, termInMonths.toString()],
    queryFn: async () => {
      if (!actor) return 0;
      return actor.calculateRepaymentAmount(loanAmount, termInMonths);
    },
    enabled: !!actor && !isFetching && loanAmount > 0,
  });
}

// Articles & Tokenization Insights hooks
export function useAllArticles() {
  const { actor, isFetching } = useActor();

  return useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllArticles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useArticleById(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Article | null>({
    queryKey: ['article', id.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getArticleById(id);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useArticlesByCategory(category: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Article[]>({
    queryKey: ['articles', 'category', category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getArticlesByCategory(category);
    },
    enabled: !!actor && !isFetching && !!category,
  });
}

export function useSearchArticles(searchTerm: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Article[]>({
    queryKey: ['articles', 'search', searchTerm],
    queryFn: async () => {
      if (!actor) return [];
      return actor.searchArticles(searchTerm);
    },
    enabled: !!actor && !isFetching && searchTerm.length > 2,
  });
}
