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
  characters: PeopleLink;
  director: Scalars['String']['output'];
  episodeId: Scalars['String']['output'];
  openingCrawl: Scalars['String']['output'];
  planets: PlanetLink;
  producer: Scalars['String']['output'];
  releaseDate: Scalars['Date']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  vehicles: VehicleLink;
};

export type FilmLink = ILink & {
  __typename?: 'FilmLink';
  count: Scalars['Int']['output'];
  results: Array<Maybe<Film>>;
};

export type FilmsResponse = QueryAllResponse & {
  __typename?: 'FilmsResponse';
  count: Scalars['Int']['output'];
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results: Array<Maybe<Film>>;
};

export type ILink = {
  count: Scalars['Int']['output'];
};

export type PaginationInput = {
  first?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type People = {
  __typename?: 'People';
  birthYear: Scalars['String']['output'];
  eyeColor: Scalars['String']['output'];
  films: FilmLink;
  gender: Scalars['String']['output'];
  hairColor: Scalars['String']['output'];
  height: Scalars['String']['output'];
  homeworld: Planet;
  mass: Scalars['String']['output'];
  name: Scalars['String']['output'];
  skinColor: Scalars['String']['output'];
  url: Scalars['String']['output'];
  vehicles: VehicleLink;
};

export type PeopleLink = ILink & {
  __typename?: 'PeopleLink';
  count: Scalars['Int']['output'];
  results: Array<Maybe<People>>;
};

export type PeopleResponse = QueryAllResponse & {
  __typename?: 'PeopleResponse';
  count: Scalars['Int']['output'];
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results: Array<Maybe<People>>;
};

export type Planet = {
  __typename?: 'Planet';
  climate: Scalars['String']['output'];
  diameter: Scalars['String']['output'];
  films: FilmLink;
  gravity: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orbitalPeriod: Scalars['String']['output'];
  population: Scalars['String']['output'];
  residents: PeopleLink;
  rotationPeriod: Scalars['String']['output'];
  surfaceWater: Scalars['String']['output'];
  terrain: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type PlanetLink = ILink & {
  __typename?: 'PlanetLink';
  count: Scalars['Int']['output'];
  results: Array<Maybe<Planet>>;
};

export type PlanetResponse = QueryAllResponse & {
  __typename?: 'PlanetResponse';
  count: Scalars['Int']['output'];
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results: Array<Maybe<Planet>>;
};

export type Query = {
  __typename?: 'Query';
  film?: Maybe<Film>;
  films: FilmsResponse;
  people: PeopleResponse;
  person?: Maybe<People>;
  planet?: Maybe<Planet>;
  planets: PlanetResponse;
  vehicle?: Maybe<Vehicle>;
  vehicles: VehicleResponse;
};


export type QueryFilmArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryFilmsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryPeopleArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryPersonArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryPlanetArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryPlanetsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryVehicleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryVehiclesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryAllResponse = {
  count: Scalars['Int']['output'];
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  cargoCapacity: Scalars['String']['output'];
  consumables: Scalars['String']['output'];
  costInCredits: Scalars['String']['output'];
  crew: Scalars['String']['output'];
  films: FilmLink;
  length: Scalars['String']['output'];
  manufacturer: Scalars['String']['output'];
  maxAtmospheringSpeed: Scalars['String']['output'];
  model: Scalars['String']['output'];
  name: Scalars['String']['output'];
  passenger: Scalars['String']['output'];
  pilots: PeopleLink;
  ulr: Scalars['String']['output'];
  vehicleClass: Scalars['String']['output'];
};

export type VehicleLink = ILink & {
  __typename?: 'VehicleLink';
  count: Scalars['Int']['output'];
  results: Array<Maybe<Vehicle>>;
};

export type VehicleResponse = QueryAllResponse & {
  __typename?: 'VehicleResponse';
  count: Scalars['Int']['output'];
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results: Array<Maybe<Vehicle>>;
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


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  ILink: ( FilmLink ) | ( PeopleLink ) | ( PlanetLink ) | ( VehicleLink );
  QueryAllResponse: ( FilmsResponse ) | ( PeopleResponse ) | ( PlanetResponse ) | ( VehicleResponse );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Film: ResolverTypeWrapper<Film>;
  FilmLink: ResolverTypeWrapper<FilmLink>;
  FilmsResponse: ResolverTypeWrapper<FilmsResponse>;
  ILink: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ILink']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PaginationInput: PaginationInput;
  People: ResolverTypeWrapper<People>;
  PeopleLink: ResolverTypeWrapper<PeopleLink>;
  PeopleResponse: ResolverTypeWrapper<PeopleResponse>;
  Planet: ResolverTypeWrapper<Planet>;
  PlanetLink: ResolverTypeWrapper<PlanetLink>;
  PlanetResponse: ResolverTypeWrapper<PlanetResponse>;
  Query: ResolverTypeWrapper<{}>;
  QueryAllResponse: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['QueryAllResponse']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Vehicle: ResolverTypeWrapper<Vehicle>;
  VehicleLink: ResolverTypeWrapper<VehicleLink>;
  VehicleResponse: ResolverTypeWrapper<VehicleResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  Film: Film;
  FilmLink: FilmLink;
  FilmsResponse: FilmsResponse;
  ILink: ResolversInterfaceTypes<ResolversParentTypes>['ILink'];
  Int: Scalars['Int']['output'];
  PaginationInput: PaginationInput;
  People: People;
  PeopleLink: PeopleLink;
  PeopleResponse: PeopleResponse;
  Planet: Planet;
  PlanetLink: PlanetLink;
  PlanetResponse: PlanetResponse;
  Query: {};
  QueryAllResponse: ResolversInterfaceTypes<ResolversParentTypes>['QueryAllResponse'];
  String: Scalars['String']['output'];
  Vehicle: Vehicle;
  VehicleLink: VehicleLink;
  VehicleResponse: VehicleResponse;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FilmResolvers<ContextType = any, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  characters?: Resolver<ResolversTypes['PeopleLink'], ParentType, ContextType>;
  director?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  episodeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  openingCrawl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  planets?: Resolver<ResolversTypes['PlanetLink'], ParentType, ContextType>;
  producer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicles?: Resolver<ResolversTypes['VehicleLink'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilmLink'] = ResolversParentTypes['FilmLink']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilmsResponse'] = ResolversParentTypes['FilmsResponse']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ILinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ILink'] = ResolversParentTypes['ILink']> = {
  __resolveType: TypeResolveFn<'FilmLink' | 'PeopleLink' | 'PlanetLink' | 'VehicleLink', ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type PeopleResolvers<ContextType = any, ParentType extends ResolversParentTypes['People'] = ResolversParentTypes['People']> = {
  birthYear?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eyeColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  films?: Resolver<ResolversTypes['FilmLink'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hairColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  homeworld?: Resolver<ResolversTypes['Planet'], ParentType, ContextType>;
  mass?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skinColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicles?: Resolver<ResolversTypes['VehicleLink'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeopleLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['PeopleLink'] = ResolversParentTypes['PeopleLink']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeopleResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PeopleResponse'] = ResolversParentTypes['PeopleResponse']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Planet'] = ResolversParentTypes['Planet']> = {
  climate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  diameter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  films?: Resolver<ResolversTypes['FilmLink'], ParentType, ContextType>;
  gravity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orbitalPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  population?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  residents?: Resolver<ResolversTypes['PeopleLink'], ParentType, ContextType>;
  rotationPeriod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surfaceWater?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  terrain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanetLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanetLink'] = ResolversParentTypes['PlanetLink']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results?: Resolver<Array<Maybe<ResolversTypes['Planet']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanetResponse'] = ResolversParentTypes['PlanetResponse']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Array<Maybe<ResolversTypes['Planet']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  film?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType, Partial<QueryFilmArgs>>;
  films?: Resolver<ResolversTypes['FilmsResponse'], ParentType, ContextType, Partial<QueryFilmsArgs>>;
  people?: Resolver<ResolversTypes['PeopleResponse'], ParentType, ContextType, Partial<QueryPeopleArgs>>;
  person?: Resolver<Maybe<ResolversTypes['People']>, ParentType, ContextType, Partial<QueryPersonArgs>>;
  planet?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType, Partial<QueryPlanetArgs>>;
  planets?: Resolver<ResolversTypes['PlanetResponse'], ParentType, ContextType, Partial<QueryPlanetsArgs>>;
  vehicle?: Resolver<Maybe<ResolversTypes['Vehicle']>, ParentType, ContextType, Partial<QueryVehicleArgs>>;
  vehicles?: Resolver<ResolversTypes['VehicleResponse'], ParentType, ContextType, Partial<QueryVehiclesArgs>>;
};

export type QueryAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryAllResponse'] = ResolversParentTypes['QueryAllResponse']> = {
  __resolveType: TypeResolveFn<'FilmsResponse' | 'PeopleResponse' | 'PlanetResponse' | 'VehicleResponse', ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type VehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
  cargoCapacity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  consumables?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  costInCredits?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  crew?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  films?: Resolver<ResolversTypes['FilmLink'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxAtmospheringSpeed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passenger?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pilots?: Resolver<ResolversTypes['PeopleLink'], ParentType, ContextType>;
  ulr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicleClass?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleLink'] = ResolversParentTypes['VehicleLink']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results?: Resolver<Array<Maybe<ResolversTypes['Vehicle']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleResponse'] = ResolversParentTypes['VehicleResponse']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Array<Maybe<ResolversTypes['Vehicle']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Film?: FilmResolvers<ContextType>;
  FilmLink?: FilmLinkResolvers<ContextType>;
  FilmsResponse?: FilmsResponseResolvers<ContextType>;
  ILink?: ILinkResolvers<ContextType>;
  People?: PeopleResolvers<ContextType>;
  PeopleLink?: PeopleLinkResolvers<ContextType>;
  PeopleResponse?: PeopleResponseResolvers<ContextType>;
  Planet?: PlanetResolvers<ContextType>;
  PlanetLink?: PlanetLinkResolvers<ContextType>;
  PlanetResponse?: PlanetResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QueryAllResponse?: QueryAllResponseResolvers<ContextType>;
  Vehicle?: VehicleResolvers<ContextType>;
  VehicleLink?: VehicleLinkResolvers<ContextType>;
  VehicleResponse?: VehicleResponseResolvers<ContextType>;
};

