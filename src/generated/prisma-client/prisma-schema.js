module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type About {
  id: UUID!
  status: String
  textArm: String!
  textEng: String!
  textRus: String!
}

type AboutConnection {
  pageInfo: PageInfo!
  edges: [AboutEdge]!
  aggregate: AggregateAbout!
}

input AboutCreateInput {
  id: UUID
  status: String
  textArm: String!
  textEng: String!
  textRus: String!
}

type AboutEdge {
  node: About!
  cursor: String!
}

enum AboutOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  textArm_ASC
  textArm_DESC
  textEng_ASC
  textEng_DESC
  textRus_ASC
  textRus_DESC
}

type AboutPreviousValues {
  id: UUID!
  status: String
  textArm: String!
  textEng: String!
  textRus: String!
}

type AboutSubscriptionPayload {
  mutation: MutationType!
  node: About
  updatedFields: [String!]
  previousValues: AboutPreviousValues
}

input AboutSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AboutWhereInput
  AND: [AboutSubscriptionWhereInput!]
  OR: [AboutSubscriptionWhereInput!]
  NOT: [AboutSubscriptionWhereInput!]
}

input AboutUpdateInput {
  status: String
  textArm: String
  textEng: String
  textRus: String
}

input AboutUpdateManyMutationInput {
  status: String
  textArm: String
  textEng: String
  textRus: String
}

input AboutWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  textArm: String
  textArm_not: String
  textArm_in: [String!]
  textArm_not_in: [String!]
  textArm_lt: String
  textArm_lte: String
  textArm_gt: String
  textArm_gte: String
  textArm_contains: String
  textArm_not_contains: String
  textArm_starts_with: String
  textArm_not_starts_with: String
  textArm_ends_with: String
  textArm_not_ends_with: String
  textEng: String
  textEng_not: String
  textEng_in: [String!]
  textEng_not_in: [String!]
  textEng_lt: String
  textEng_lte: String
  textEng_gt: String
  textEng_gte: String
  textEng_contains: String
  textEng_not_contains: String
  textEng_starts_with: String
  textEng_not_starts_with: String
  textEng_ends_with: String
  textEng_not_ends_with: String
  textRus: String
  textRus_not: String
  textRus_in: [String!]
  textRus_not_in: [String!]
  textRus_lt: String
  textRus_lte: String
  textRus_gt: String
  textRus_gte: String
  textRus_contains: String
  textRus_not_contains: String
  textRus_starts_with: String
  textRus_not_starts_with: String
  textRus_ends_with: String
  textRus_not_ends_with: String
  AND: [AboutWhereInput!]
  OR: [AboutWhereInput!]
  NOT: [AboutWhereInput!]
}

input AboutWhereUniqueInput {
  id: UUID
}

type AggregateAbout {
  count: Int!
}

type AggregateBlogPost {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateHomepageSlider {
  count: Int!
}

type AggregatePartnerSlider {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type BlogPost {
  id: Int!
  author: User!
  comment(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  content: String!
  published: DateTime!
  slug: String
  title: String!
}

type BlogPostConnection {
  pageInfo: PageInfo!
  edges: [BlogPostEdge]!
  aggregate: AggregateBlogPost!
}

input BlogPostCreateInput {
  id: Int
  author: UserCreateOneWithoutBlogPostInput!
  comment: CommentCreateManyWithoutBlogPostInput
  content: String!
  published: DateTime!
  slug: String
  title: String!
}

input BlogPostCreateManyWithoutAuthorInput {
  create: [BlogPostCreateWithoutAuthorInput!]
  connect: [BlogPostWhereUniqueInput!]
}

input BlogPostCreateOneWithoutCommentInput {
  create: BlogPostCreateWithoutCommentInput
  connect: BlogPostWhereUniqueInput
}

input BlogPostCreateWithoutAuthorInput {
  id: Int
  comment: CommentCreateManyWithoutBlogPostInput
  content: String!
  published: DateTime!
  slug: String
  title: String!
}

input BlogPostCreateWithoutCommentInput {
  id: Int
  author: UserCreateOneWithoutBlogPostInput!
  content: String!
  published: DateTime!
  slug: String
  title: String!
}

type BlogPostEdge {
  node: BlogPost!
  cursor: String!
}

enum BlogPostOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
  published_ASC
  published_DESC
  slug_ASC
  slug_DESC
  title_ASC
  title_DESC
}

type BlogPostPreviousValues {
  id: Int!
  content: String!
  published: DateTime!
  slug: String
  title: String!
}

input BlogPostScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  published: DateTime
  published_not: DateTime
  published_in: [DateTime!]
  published_not_in: [DateTime!]
  published_lt: DateTime
  published_lte: DateTime
  published_gt: DateTime
  published_gte: DateTime
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [BlogPostScalarWhereInput!]
  OR: [BlogPostScalarWhereInput!]
  NOT: [BlogPostScalarWhereInput!]
}

type BlogPostSubscriptionPayload {
  mutation: MutationType!
  node: BlogPost
  updatedFields: [String!]
  previousValues: BlogPostPreviousValues
}

input BlogPostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BlogPostWhereInput
  AND: [BlogPostSubscriptionWhereInput!]
  OR: [BlogPostSubscriptionWhereInput!]
  NOT: [BlogPostSubscriptionWhereInput!]
}

input BlogPostUpdateInput {
  author: UserUpdateOneRequiredWithoutBlogPostInput
  comment: CommentUpdateManyWithoutBlogPostInput
  content: String
  published: DateTime
  slug: String
  title: String
}

input BlogPostUpdateManyDataInput {
  content: String
  published: DateTime
  slug: String
  title: String
}

input BlogPostUpdateManyMutationInput {
  content: String
  published: DateTime
  slug: String
  title: String
}

input BlogPostUpdateManyWithoutAuthorInput {
  create: [BlogPostCreateWithoutAuthorInput!]
  delete: [BlogPostWhereUniqueInput!]
  connect: [BlogPostWhereUniqueInput!]
  set: [BlogPostWhereUniqueInput!]
  disconnect: [BlogPostWhereUniqueInput!]
  update: [BlogPostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [BlogPostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [BlogPostScalarWhereInput!]
  updateMany: [BlogPostUpdateManyWithWhereNestedInput!]
}

input BlogPostUpdateManyWithWhereNestedInput {
  where: BlogPostScalarWhereInput!
  data: BlogPostUpdateManyDataInput!
}

input BlogPostUpdateOneRequiredWithoutCommentInput {
  create: BlogPostCreateWithoutCommentInput
  update: BlogPostUpdateWithoutCommentDataInput
  upsert: BlogPostUpsertWithoutCommentInput
  connect: BlogPostWhereUniqueInput
}

input BlogPostUpdateWithoutAuthorDataInput {
  comment: CommentUpdateManyWithoutBlogPostInput
  content: String
  published: DateTime
  slug: String
  title: String
}

input BlogPostUpdateWithoutCommentDataInput {
  author: UserUpdateOneRequiredWithoutBlogPostInput
  content: String
  published: DateTime
  slug: String
  title: String
}

input BlogPostUpdateWithWhereUniqueWithoutAuthorInput {
  where: BlogPostWhereUniqueInput!
  data: BlogPostUpdateWithoutAuthorDataInput!
}

input BlogPostUpsertWithoutCommentInput {
  update: BlogPostUpdateWithoutCommentDataInput!
  create: BlogPostCreateWithoutCommentInput!
}

input BlogPostUpsertWithWhereUniqueWithoutAuthorInput {
  where: BlogPostWhereUniqueInput!
  update: BlogPostUpdateWithoutAuthorDataInput!
  create: BlogPostCreateWithoutAuthorInput!
}

input BlogPostWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  author: UserWhereInput
  comment_every: CommentWhereInput
  comment_some: CommentWhereInput
  comment_none: CommentWhereInput
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  published: DateTime
  published_not: DateTime
  published_in: [DateTime!]
  published_not_in: [DateTime!]
  published_lt: DateTime
  published_lte: DateTime
  published_gt: DateTime
  published_gte: DateTime
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [BlogPostWhereInput!]
  OR: [BlogPostWhereInput!]
  NOT: [BlogPostWhereInput!]
}

input BlogPostWhereUniqueInput {
  id: Int
}

type Comment {
  id: Int!
  author: User!
  blogPost: BlogPost!
  content: String!
  published: DateTime!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: Int
  author: UserCreateOneWithoutCommentInput!
  blogPost: BlogPostCreateOneWithoutCommentInput!
  content: String!
  published: DateTime!
}

input CommentCreateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutBlogPostInput {
  create: [CommentCreateWithoutBlogPostInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutAuthorInput {
  id: Int
  blogPost: BlogPostCreateOneWithoutCommentInput!
  content: String!
  published: DateTime!
}

input CommentCreateWithoutBlogPostInput {
  id: Int
  author: UserCreateOneWithoutCommentInput!
  content: String!
  published: DateTime!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
  published_ASC
  published_DESC
}

type CommentPreviousValues {
  id: Int!
  content: String!
  published: DateTime!
}

input CommentScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  published: DateTime
  published_not: DateTime
  published_in: [DateTime!]
  published_not_in: [DateTime!]
  published_lt: DateTime
  published_lte: DateTime
  published_gt: DateTime
  published_gte: DateTime
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  author: UserUpdateOneRequiredWithoutCommentInput
  blogPost: BlogPostUpdateOneRequiredWithoutCommentInput
  content: String
  published: DateTime
}

input CommentUpdateManyDataInput {
  content: String
  published: DateTime
}

input CommentUpdateManyMutationInput {
  content: String
  published: DateTime
}

input CommentUpdateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithoutBlogPostInput {
  create: [CommentCreateWithoutBlogPostInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutBlogPostInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutBlogPostInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutAuthorDataInput {
  blogPost: BlogPostUpdateOneRequiredWithoutCommentInput
  content: String
  published: DateTime
}

input CommentUpdateWithoutBlogPostDataInput {
  author: UserUpdateOneRequiredWithoutCommentInput
  content: String
  published: DateTime
}

input CommentUpdateWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutAuthorDataInput!
}

input CommentUpdateWithWhereUniqueWithoutBlogPostInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutBlogPostDataInput!
}

input CommentUpsertWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutAuthorDataInput!
  create: CommentCreateWithoutAuthorInput!
}

input CommentUpsertWithWhereUniqueWithoutBlogPostInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutBlogPostDataInput!
  create: CommentCreateWithoutBlogPostInput!
}

input CommentWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  author: UserWhereInput
  blogPost: BlogPostWhereInput
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  published: DateTime
  published_not: DateTime
  published_in: [DateTime!]
  published_not_in: [DateTime!]
  published_lt: DateTime
  published_lte: DateTime
  published_gt: DateTime
  published_gte: DateTime
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: Int
}

scalar DateTime

type HomepageSlider {
  id: UUID!
  filepath: String!
  position: Int
}

type HomepageSliderConnection {
  pageInfo: PageInfo!
  edges: [HomepageSliderEdge]!
  aggregate: AggregateHomepageSlider!
}

input HomepageSliderCreateInput {
  id: UUID
  filepath: String!
  position: Int
}

type HomepageSliderEdge {
  node: HomepageSlider!
  cursor: String!
}

enum HomepageSliderOrderByInput {
  id_ASC
  id_DESC
  filepath_ASC
  filepath_DESC
  position_ASC
  position_DESC
}

type HomepageSliderPreviousValues {
  id: UUID!
  filepath: String!
  position: Int
}

type HomepageSliderSubscriptionPayload {
  mutation: MutationType!
  node: HomepageSlider
  updatedFields: [String!]
  previousValues: HomepageSliderPreviousValues
}

input HomepageSliderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HomepageSliderWhereInput
  AND: [HomepageSliderSubscriptionWhereInput!]
  OR: [HomepageSliderSubscriptionWhereInput!]
  NOT: [HomepageSliderSubscriptionWhereInput!]
}

input HomepageSliderUpdateInput {
  filepath: String
  position: Int
}

input HomepageSliderUpdateManyMutationInput {
  filepath: String
  position: Int
}

input HomepageSliderWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  filepath: String
  filepath_not: String
  filepath_in: [String!]
  filepath_not_in: [String!]
  filepath_lt: String
  filepath_lte: String
  filepath_gt: String
  filepath_gte: String
  filepath_contains: String
  filepath_not_contains: String
  filepath_starts_with: String
  filepath_not_starts_with: String
  filepath_ends_with: String
  filepath_not_ends_with: String
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  AND: [HomepageSliderWhereInput!]
  OR: [HomepageSliderWhereInput!]
  NOT: [HomepageSliderWhereInput!]
}

input HomepageSliderWhereUniqueInput {
  id: UUID
  position: Int
}

scalar Long

type Mutation {
  createAbout(data: AboutCreateInput!): About!
  updateAbout(data: AboutUpdateInput!, where: AboutWhereUniqueInput!): About
  updateManyAbouts(data: AboutUpdateManyMutationInput!, where: AboutWhereInput): BatchPayload!
  upsertAbout(where: AboutWhereUniqueInput!, create: AboutCreateInput!, update: AboutUpdateInput!): About!
  deleteAbout(where: AboutWhereUniqueInput!): About
  deleteManyAbouts(where: AboutWhereInput): BatchPayload!
  createBlogPost(data: BlogPostCreateInput!): BlogPost!
  updateBlogPost(data: BlogPostUpdateInput!, where: BlogPostWhereUniqueInput!): BlogPost
  updateManyBlogPosts(data: BlogPostUpdateManyMutationInput!, where: BlogPostWhereInput): BatchPayload!
  upsertBlogPost(where: BlogPostWhereUniqueInput!, create: BlogPostCreateInput!, update: BlogPostUpdateInput!): BlogPost!
  deleteBlogPost(where: BlogPostWhereUniqueInput!): BlogPost
  deleteManyBlogPosts(where: BlogPostWhereInput): BatchPayload!
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createHomepageSlider(data: HomepageSliderCreateInput!): HomepageSlider!
  updateHomepageSlider(data: HomepageSliderUpdateInput!, where: HomepageSliderWhereUniqueInput!): HomepageSlider
  updateManyHomepageSliders(data: HomepageSliderUpdateManyMutationInput!, where: HomepageSliderWhereInput): BatchPayload!
  upsertHomepageSlider(where: HomepageSliderWhereUniqueInput!, create: HomepageSliderCreateInput!, update: HomepageSliderUpdateInput!): HomepageSlider!
  deleteHomepageSlider(where: HomepageSliderWhereUniqueInput!): HomepageSlider
  deleteManyHomepageSliders(where: HomepageSliderWhereInput): BatchPayload!
  createPartnerSlider(data: PartnerSliderCreateInput!): PartnerSlider!
  updatePartnerSlider(data: PartnerSliderUpdateInput!, where: PartnerSliderWhereUniqueInput!): PartnerSlider
  updateManyPartnerSliders(data: PartnerSliderUpdateManyMutationInput!, where: PartnerSliderWhereInput): BatchPayload!
  upsertPartnerSlider(where: PartnerSliderWhereUniqueInput!, create: PartnerSliderCreateInput!, update: PartnerSliderUpdateInput!): PartnerSlider!
  deletePartnerSlider(where: PartnerSliderWhereUniqueInput!): PartnerSlider
  deleteManyPartnerSliders(where: PartnerSliderWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type PartnerSlider {
  id: UUID!
  filepath: String!
  url: String
}

type PartnerSliderConnection {
  pageInfo: PageInfo!
  edges: [PartnerSliderEdge]!
  aggregate: AggregatePartnerSlider!
}

input PartnerSliderCreateInput {
  id: UUID
  filepath: String!
  url: String
}

type PartnerSliderEdge {
  node: PartnerSlider!
  cursor: String!
}

enum PartnerSliderOrderByInput {
  id_ASC
  id_DESC
  filepath_ASC
  filepath_DESC
  url_ASC
  url_DESC
}

type PartnerSliderPreviousValues {
  id: UUID!
  filepath: String!
  url: String
}

type PartnerSliderSubscriptionPayload {
  mutation: MutationType!
  node: PartnerSlider
  updatedFields: [String!]
  previousValues: PartnerSliderPreviousValues
}

input PartnerSliderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartnerSliderWhereInput
  AND: [PartnerSliderSubscriptionWhereInput!]
  OR: [PartnerSliderSubscriptionWhereInput!]
  NOT: [PartnerSliderSubscriptionWhereInput!]
}

input PartnerSliderUpdateInput {
  filepath: String
  url: String
}

input PartnerSliderUpdateManyMutationInput {
  filepath: String
  url: String
}

input PartnerSliderWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  filepath: String
  filepath_not: String
  filepath_in: [String!]
  filepath_not_in: [String!]
  filepath_lt: String
  filepath_lte: String
  filepath_gt: String
  filepath_gte: String
  filepath_contains: String
  filepath_not_contains: String
  filepath_starts_with: String
  filepath_not_starts_with: String
  filepath_ends_with: String
  filepath_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [PartnerSliderWhereInput!]
  OR: [PartnerSliderWhereInput!]
  NOT: [PartnerSliderWhereInput!]
}

input PartnerSliderWhereUniqueInput {
  id: UUID
}

type Query {
  about(where: AboutWhereUniqueInput!): About
  abouts(where: AboutWhereInput, orderBy: AboutOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [About]!
  aboutsConnection(where: AboutWhereInput, orderBy: AboutOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AboutConnection!
  blogPost(where: BlogPostWhereUniqueInput!): BlogPost
  blogPosts(where: BlogPostWhereInput, orderBy: BlogPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BlogPost]!
  blogPostsConnection(where: BlogPostWhereInput, orderBy: BlogPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BlogPostConnection!
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  homepageSlider(where: HomepageSliderWhereUniqueInput!): HomepageSlider
  homepageSliders(where: HomepageSliderWhereInput, orderBy: HomepageSliderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HomepageSlider]!
  homepageSlidersConnection(where: HomepageSliderWhereInput, orderBy: HomepageSliderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HomepageSliderConnection!
  partnerSlider(where: PartnerSliderWhereUniqueInput!): PartnerSlider
  partnerSliders(where: PartnerSliderWhereInput, orderBy: PartnerSliderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartnerSlider]!
  partnerSlidersConnection(where: PartnerSliderWhereInput, orderBy: PartnerSliderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartnerSliderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  about(where: AboutSubscriptionWhereInput): AboutSubscriptionPayload
  blogPost(where: BlogPostSubscriptionWhereInput): BlogPostSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  homepageSlider(where: HomepageSliderSubscriptionWhereInput): HomepageSliderSubscriptionPayload
  partnerSlider(where: PartnerSliderSubscriptionWhereInput): PartnerSliderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: Int!
  blogPost(where: BlogPostWhereInput, orderBy: BlogPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BlogPost!]
  comment(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  email: String!
  name: String!
  password: String!
  username: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: Int
  blogPost: BlogPostCreateManyWithoutAuthorInput
  comment: CommentCreateManyWithoutAuthorInput
  email: String!
  name: String!
  password: String!
  username: String!
}

input UserCreateOneWithoutBlogPostInput {
  create: UserCreateWithoutBlogPostInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCommentInput {
  create: UserCreateWithoutCommentInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBlogPostInput {
  id: Int
  comment: CommentCreateManyWithoutAuthorInput
  email: String!
  name: String!
  password: String!
  username: String!
}

input UserCreateWithoutCommentInput {
  id: Int
  blogPost: BlogPostCreateManyWithoutAuthorInput
  email: String!
  name: String!
  password: String!
  username: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  username_ASC
  username_DESC
}

type UserPreviousValues {
  id: Int!
  email: String!
  name: String!
  password: String!
  username: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  blogPost: BlogPostUpdateManyWithoutAuthorInput
  comment: CommentUpdateManyWithoutAuthorInput
  email: String
  name: String
  password: String
  username: String
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  password: String
  username: String
}

input UserUpdateOneRequiredWithoutBlogPostInput {
  create: UserCreateWithoutBlogPostInput
  update: UserUpdateWithoutBlogPostDataInput
  upsert: UserUpsertWithoutBlogPostInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutCommentInput {
  create: UserCreateWithoutCommentInput
  update: UserUpdateWithoutCommentDataInput
  upsert: UserUpsertWithoutCommentInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBlogPostDataInput {
  comment: CommentUpdateManyWithoutAuthorInput
  email: String
  name: String
  password: String
  username: String
}

input UserUpdateWithoutCommentDataInput {
  blogPost: BlogPostUpdateManyWithoutAuthorInput
  email: String
  name: String
  password: String
  username: String
}

input UserUpsertWithoutBlogPostInput {
  update: UserUpdateWithoutBlogPostDataInput!
  create: UserCreateWithoutBlogPostInput!
}

input UserUpsertWithoutCommentInput {
  update: UserUpdateWithoutCommentDataInput!
  create: UserCreateWithoutCommentInput!
}

input UserWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  blogPost_every: BlogPostWhereInput
  blogPost_some: BlogPostWhereInput
  blogPost_none: BlogPostWhereInput
  comment_every: CommentWhereInput
  comment_some: CommentWhereInput
  comment_none: CommentWhereInput
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: Int
  email: String
  username: String
}

scalar UUID
`
      }
    