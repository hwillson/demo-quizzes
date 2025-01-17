import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from '../types/DataSourceContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _FieldSet: { input: any; output: any; }
};

export type Choice = {
  __typename?: 'Choice';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type Leaderboard = {
  __typename?: 'Leaderboard';
  list?: Maybe<Array<Maybe<Player>>>;
  quiz?: Maybe<Quiz>;
};

export type Mutation = {
  __typename?: 'Mutation';
  postQuestion?: Maybe<Question>;
  updateLeaderboardForQuiz?: Maybe<Leaderboard>;
};


export type MutationUpdateLeaderboardForQuizArgs = {
  id: Scalars['ID']['input'];
};

export type Player = {
  __typename?: 'Player';
  name: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allQuizzes: Array<Quiz>;
  leaderboardForQuiz?: Maybe<Leaderboard>;
};


export type QueryLeaderboardForQuizArgs = {
  id: Scalars['ID']['input'];
};

export type Question = {
  __typename?: 'Question';
  choices: Array<Choice>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Quiz = {
  __typename?: 'Quiz';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  leaderboardForQuiz?: Maybe<Leaderboard>;
  /** Listens for changes in what question to show now */
  questionPosted?: Maybe<Question>;
};


export type SubscriptionLeaderboardForQuizArgs = {
  id: Scalars['ID']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Choice: ResolverTypeWrapper<Choice>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Leaderboard: ResolverTypeWrapper<Leaderboard>;
  Mutation: ResolverTypeWrapper<{}>;
  Player: ResolverTypeWrapper<Player>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  Quiz: ResolverTypeWrapper<Quiz>;
  Subscription: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Choice: Choice;
  ID: Scalars['ID']['output'];
  String: Scalars['String']['output'];
  Leaderboard: Leaderboard;
  Mutation: {};
  Player: Player;
  Int: Scalars['Int']['output'];
  Query: {};
  Question: Question;
  Quiz: Quiz;
  Subscription: {};
  Boolean: Scalars['Boolean']['output'];
}>;

export type ContactDirectiveArgs = {
  description?: Maybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  url?: Maybe<Scalars['String']['input']>;
};

export type ContactDirectiveResolver<Result, Parent, ContextType = DataSourceContext, Args = ContactDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ChoiceResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Choice'] = ResolversParentTypes['Choice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LeaderboardResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Leaderboard'] = ResolversParentTypes['Leaderboard']> = ResolversObject<{
  list?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  quiz?: Resolver<Maybe<ResolversTypes['Quiz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  postQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>;
  updateLeaderboardForQuiz?: Resolver<Maybe<ResolversTypes['Leaderboard']>, ParentType, ContextType, RequireFields<MutationUpdateLeaderboardForQuizArgs, 'id'>>;
}>;

export type PlayerResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  allQuizzes?: Resolver<Array<ResolversTypes['Quiz']>, ParentType, ContextType>;
  leaderboardForQuiz?: Resolver<Maybe<ResolversTypes['Leaderboard']>, ParentType, ContextType, RequireFields<QueryLeaderboardForQuizArgs, 'id'>>;
}>;

export type QuestionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Question']>, { __typename: 'Question' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  choices?: Resolver<Array<ResolversTypes['Choice']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Quiz'] = ResolversParentTypes['Quiz']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Quiz']>, { __typename: 'Quiz' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  leaderboardForQuiz?: SubscriptionResolver<Maybe<ResolversTypes['Leaderboard']>, "leaderboardForQuiz", ParentType, ContextType, RequireFields<SubscriptionLeaderboardForQuizArgs, 'id'>>;
  questionPosted?: SubscriptionResolver<Maybe<ResolversTypes['Question']>, "questionPosted", ParentType, ContextType>;
}>;

export type Resolvers<ContextType = DataSourceContext> = ResolversObject<{
  Choice?: ChoiceResolvers<ContextType>;
  Leaderboard?: LeaderboardResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  Quiz?: QuizResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = DataSourceContext> = ResolversObject<{
  contact?: ContactDirectiveResolver<any, any, ContextType>;
}>;
