import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Film = {
  __typename?: 'Film';
  characters?: Maybe<Array<Maybe<People>>>;
  director?: Maybe<Scalars['String']['output']>;
  episodeId?: Maybe<Scalars['String']['output']>;
  openingCrawl?: Maybe<Scalars['String']['output']>;
  planets?: Maybe<Array<Maybe<Planet>>>;
  producer?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

export type People = {
  __typename?: 'People';
  birthYear: Scalars['String']['output'];
  eyeColor: Scalars['String']['output'];
  films: Array<Maybe<Film>>;
  gender: Scalars['String']['output'];
  hairColor: Scalars['String']['output'];
  height: Scalars['String']['output'];
  homeworld?: Maybe<Planet>;
  mass: Scalars['String']['output'];
  name: Scalars['String']['output'];
  skinColor: Scalars['String']['output'];
  url: Scalars['String']['output'];
  vehicles: Array<Maybe<Vehicle>>;
};

export type Planet = {
  __typename?: 'Planet';
  climate?: Maybe<Scalars['String']['output']>;
  diameter?: Maybe<Scalars['String']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  gravity?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orbitalPeriod?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['String']['output']>;
  residents?: Maybe<Array<Maybe<People>>>;
  rotationPeriod?: Maybe<Scalars['String']['output']>;
  surfaceWater?: Maybe<Scalars['String']['output']>;
  terrain?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  people: Array<Maybe<People>>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  cargoCapacity?: Maybe<Scalars['String']['output']>;
  consumables?: Maybe<Scalars['String']['output']>;
  costInCredits?: Maybe<Scalars['String']['output']>;
  crew?: Maybe<Scalars['String']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  length?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  maxAtmospheringSpeed?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passenger?: Maybe<Scalars['String']['output']>;
  pilots?: Maybe<Array<Maybe<People>>>;
  ulr?: Maybe<Scalars['String']['output']>;
  vehicleClass?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


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
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Film: ResolverTypeWrapper<Film>;
  People: ResolverTypeWrapper<People>;
  Planet: ResolverTypeWrapper<Planet>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Vehicle: ResolverTypeWrapper<Vehicle>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  Film: Film;
  People: People;
  Planet: Planet;
  Query: {};
  String: Scalars['String']['output'];
  Vehicle: Vehicle;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FilmResolvers<ContextType = any, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['People']>>>, ParentType, ContextType>;
  director?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  openingCrawl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  planets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Planet']>>>, ParentType, ContextType>;
  producer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vehicle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeopleResolvers<ContextType = any, ParentType extends ResolversParentTypes['People'] = ResolversParentTypes['People']> = {
  birthYear?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eyeColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  films?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hairColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  homeworld?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
  mass?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skinColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicles?: Resolver<Array<Maybe<ResolversTypes['Vehicle']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Planet'] = ResolversParentTypes['Planet']> = {
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  gravity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orbitalPeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  residents?: Resolver<Maybe<Array<Maybe<ResolversTypes['People']>>>, ParentType, ContextType>;
  rotationPeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surfaceWater?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terrain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  people?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
};

export type VehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
  cargoCapacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costInCredits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxAtmospheringSpeed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passenger?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pilots?: Resolver<Maybe<Array<Maybe<ResolversTypes['People']>>>, ParentType, ContextType>;
  ulr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vehicleClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Film?: FilmResolvers<ContextType>;
  People?: PeopleResolvers<ContextType>;
  Planet?: PlanetResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Vehicle?: VehicleResolvers<ContextType>;
};

