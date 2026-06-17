
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model LessonProgress
 * 
 */
export type LessonProgress = $Result.DefaultSelection<Prisma.$LessonProgressPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model CourseReview
 * 
 */
export type CourseReview = $Result.DefaultSelection<Prisma.$CourseReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  student: 'student',
  instructor: 'instructor',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SkillLevel: {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced',
  expert: 'expert'
};

export type SkillLevel = (typeof SkillLevel)[keyof typeof SkillLevel]


export const EnrollmentStatus: {
  active: 'active',
  completed: 'completed',
  refunded: 'refunded'
};

export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus]


export const PaymentType: {
  one_time: 'one_time',
  subscription: 'subscription'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const PaymentStatus: {
  pending: 'pending',
  completed: 'completed',
  failed: 'failed',
  refunded: 'refunded'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const SubscriptionPlanType: {
  monthly: 'monthly',
  yearly: 'yearly'
};

export type SubscriptionPlanType = (typeof SubscriptionPlanType)[keyof typeof SubscriptionPlanType]


export const SubscriptionTier: {
  starter: 'starter',
  premium: 'premium'
};

export type SubscriptionTier = (typeof SubscriptionTier)[keyof typeof SubscriptionTier]


export const SubscriptionStatus: {
  active: 'active',
  canceled: 'canceled',
  expired: 'expired',
  past_due: 'past_due'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SkillLevel = $Enums.SkillLevel

export const SkillLevel: typeof $Enums.SkillLevel

export type EnrollmentStatus = $Enums.EnrollmentStatus

export const EnrollmentStatus: typeof $Enums.EnrollmentStatus

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type SubscriptionPlanType = $Enums.SubscriptionPlanType

export const SubscriptionPlanType: typeof $Enums.SubscriptionPlanType

export type SubscriptionTier = $Enums.SubscriptionTier

export const SubscriptionTier: typeof $Enums.SubscriptionTier

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonProgress`: Exposes CRUD operations for the **LessonProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonProgresses
    * const lessonProgresses = await prisma.lessonProgress.findMany()
    * ```
    */
  get lessonProgress(): Prisma.LessonProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseReview`: Exposes CRUD operations for the **CourseReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseReviews
    * const courseReviews = await prisma.courseReview.findMany()
    * ```
    */
  get courseReview(): Prisma.CourseReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Category: 'Category',
    Course: 'Course',
    Lesson: 'Lesson',
    Enrollment: 'Enrollment',
    LessonProgress: 'LessonProgress',
    Payment: 'Payment',
    Subscription: 'Subscription',
    CourseReview: 'CourseReview'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "category" | "course" | "lesson" | "enrollment" | "lessonProgress" | "payment" | "subscription" | "courseReview"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      LessonProgress: {
        payload: Prisma.$LessonProgressPayload<ExtArgs>
        fields: Prisma.LessonProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          findFirst: {
            args: Prisma.LessonProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          findMany: {
            args: Prisma.LessonProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          create: {
            args: Prisma.LessonProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          createMany: {
            args: Prisma.LessonProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          delete: {
            args: Prisma.LessonProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          update: {
            args: Prisma.LessonProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          deleteMany: {
            args: Prisma.LessonProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          upsert: {
            args: Prisma.LessonProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          aggregate: {
            args: Prisma.LessonProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonProgress>
          }
          groupBy: {
            args: Prisma.LessonProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonProgressCountArgs<ExtArgs>
            result: $Utils.Optional<LessonProgressCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      CourseReview: {
        payload: Prisma.$CourseReviewPayload<ExtArgs>
        fields: Prisma.CourseReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          findFirst: {
            args: Prisma.CourseReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          findMany: {
            args: Prisma.CourseReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>[]
          }
          create: {
            args: Prisma.CourseReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          createMany: {
            args: Prisma.CourseReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>[]
          }
          delete: {
            args: Prisma.CourseReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          update: {
            args: Prisma.CourseReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          deleteMany: {
            args: Prisma.CourseReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>[]
          }
          upsert: {
            args: Prisma.CourseReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          aggregate: {
            args: Prisma.CourseReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseReview>
          }
          groupBy: {
            args: Prisma.CourseReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseReviewCountArgs<ExtArgs>
            result: $Utils.Optional<CourseReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    category?: CategoryOmit
    course?: CourseOmit
    lesson?: LessonOmit
    enrollment?: EnrollmentOmit
    lessonProgress?: LessonProgressOmit
    payment?: PaymentOmit
    subscription?: SubscriptionOmit
    courseReview?: CourseReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    courses: number
    enrollments: number
    progress: number
    payments: number
    subscriptions: number
    reviews: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | ProfileCountOutputTypeCountCoursesArgs
    enrollments?: boolean | ProfileCountOutputTypeCountEnrollmentsArgs
    progress?: boolean | ProfileCountOutputTypeCountProgressArgs
    payments?: boolean | ProfileCountOutputTypeCountPaymentsArgs
    subscriptions?: boolean | ProfileCountOutputTypeCountSubscriptionsArgs
    reviews?: boolean | ProfileCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseReviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    courses: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CategoryCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    lessons: number
    enrollments: number
    payments: number
    reviews: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CourseCountOutputTypeCountLessonsArgs
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs
    payments?: boolean | CourseCountOutputTypeCountPaymentsArgs
    reviews?: boolean | CourseCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseReviewWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    progress: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | LessonCountOutputTypeCountProgressArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    enrollments: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | PaymentCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    payments: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SubscriptionCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    displayName: string | null
    avatarUrl: string | null
    bio: string | null
    skillLevel: $Enums.SkillLevel | null
    role: $Enums.Role | null
    joinDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    displayName: string | null
    avatarUrl: string | null
    bio: string | null
    skillLevel: $Enums.SkillLevel | null
    role: $Enums.Role | null
    joinDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    displayName: number
    avatarUrl: number
    bio: number
    skillLevel: number
    role: number
    joinDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    displayName?: true
    avatarUrl?: true
    bio?: true
    skillLevel?: true
    role?: true
    joinDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    displayName?: true
    avatarUrl?: true
    bio?: true
    skillLevel?: true
    role?: true
    joinDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    displayName?: true
    avatarUrl?: true
    bio?: true
    skillLevel?: true
    role?: true
    joinDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    displayName: string | null
    avatarUrl: string | null
    bio: string | null
    skillLevel: $Enums.SkillLevel
    role: $Enums.Role
    joinDate: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    skillLevel?: boolean
    role?: boolean
    joinDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    courses?: boolean | Profile$coursesArgs<ExtArgs>
    enrollments?: boolean | Profile$enrollmentsArgs<ExtArgs>
    progress?: boolean | Profile$progressArgs<ExtArgs>
    payments?: boolean | Profile$paymentsArgs<ExtArgs>
    subscriptions?: boolean | Profile$subscriptionsArgs<ExtArgs>
    reviews?: boolean | Profile$reviewsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    skillLevel?: boolean
    role?: boolean
    joinDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    skillLevel?: boolean
    role?: boolean
    joinDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    skillLevel?: boolean
    role?: boolean
    joinDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayName" | "avatarUrl" | "bio" | "skillLevel" | "role" | "joinDate" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Profile$coursesArgs<ExtArgs>
    enrollments?: boolean | Profile$enrollmentsArgs<ExtArgs>
    progress?: boolean | Profile$progressArgs<ExtArgs>
    payments?: boolean | Profile$paymentsArgs<ExtArgs>
    subscriptions?: boolean | Profile$subscriptionsArgs<ExtArgs>
    reviews?: boolean | Profile$reviewsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      progress: Prisma.$LessonProgressPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      reviews: Prisma.$CourseReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayName: string | null
      avatarUrl: string | null
      bio: string | null
      skillLevel: $Enums.SkillLevel
      role: $Enums.Role
      joinDate: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Profile$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Profile$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends Profile$progressArgs<ExtArgs> = {}>(args?: Subset<T, Profile$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Profile$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends Profile$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Profile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly displayName: FieldRef<"Profile", 'String'>
    readonly avatarUrl: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly skillLevel: FieldRef<"Profile", 'SkillLevel'>
    readonly role: FieldRef<"Profile", 'Role'>
    readonly joinDate: FieldRef<"Profile", 'DateTime'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly deletedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.courses
   */
  export type Profile$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Profile.enrollments
   */
  export type Profile$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Profile.progress
   */
  export type Profile$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    cursor?: LessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * Profile.payments
   */
  export type Profile$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Profile.subscriptions
   */
  export type Profile$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Profile.reviews
   */
  export type Profile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    where?: CourseReviewWhereInput
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    cursor?: CourseReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseReviewScalarFieldEnum | CourseReviewScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    sortOrder?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    sortOrder?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string | null
    sortOrder: number
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    courses?: boolean | Category$coursesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "sortOrder" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Category$coursesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string | null
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Category$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Category$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly sortOrder: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.courses
   */
  export type Category$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    categoryId: number | null
    price: number | null
  }

  export type CourseSumAggregateOutputType = {
    categoryId: number | null
    price: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    instructorId: string | null
    categoryId: number | null
    title: string | null
    description: string | null
    thumbnailUrl: string | null
    skillLevel: $Enums.SkillLevel | null
    price: number | null
    isPublished: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    instructorId: string | null
    categoryId: number | null
    title: string | null
    description: string | null
    thumbnailUrl: string | null
    skillLevel: $Enums.SkillLevel | null
    price: number | null
    isPublished: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    instructorId: number
    categoryId: number
    title: number
    description: number
    thumbnailUrl: number
    skillLevel: number
    price: number
    isPublished: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    categoryId?: true
    price?: true
  }

  export type CourseSumAggregateInputType = {
    categoryId?: true
    price?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    instructorId?: true
    categoryId?: true
    title?: true
    description?: true
    thumbnailUrl?: true
    skillLevel?: true
    price?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    instructorId?: true
    categoryId?: true
    title?: true
    description?: true
    thumbnailUrl?: true
    skillLevel?: true
    price?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    instructorId?: true
    categoryId?: true
    title?: true
    description?: true
    thumbnailUrl?: true
    skillLevel?: true
    price?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    instructorId: string
    categoryId: number | null
    title: string
    description: string | null
    thumbnailUrl: string | null
    skillLevel: $Enums.SkillLevel
    price: number
    isPublished: boolean
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    skillLevel?: boolean
    price?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    instructor?: boolean | ProfileDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    payments?: boolean | Course$paymentsArgs<ExtArgs>
    reviews?: boolean | Course$reviewsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    skillLevel?: boolean
    price?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    instructor?: boolean | ProfileDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    skillLevel?: boolean
    price?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    instructor?: boolean | ProfileDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    instructorId?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    skillLevel?: boolean
    price?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructorId" | "categoryId" | "title" | "description" | "thumbnailUrl" | "skillLevel" | "price" | "isPublished" | "publishedAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | ProfileDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    payments?: boolean | Course$paymentsArgs<ExtArgs>
    reviews?: boolean | Course$reviewsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | ProfileDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | ProfileDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      instructor: Prisma.$ProfilePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      lessons: Prisma.$LessonPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      reviews: Prisma.$CourseReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instructorId: string
      categoryId: number | null
      title: string
      description: string | null
      thumbnailUrl: string | null
      skillLevel: $Enums.SkillLevel
      price: number
      isPublished: boolean
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Course$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Course$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Course$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Course$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Course$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Course$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Course$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Course$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly instructorId: FieldRef<"Course", 'String'>
    readonly categoryId: FieldRef<"Course", 'Int'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly thumbnailUrl: FieldRef<"Course", 'String'>
    readonly skillLevel: FieldRef<"Course", 'SkillLevel'>
    readonly price: FieldRef<"Course", 'Int'>
    readonly isPublished: FieldRef<"Course", 'Boolean'>
    readonly publishedAt: FieldRef<"Course", 'DateTime'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
    readonly deletedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.category
   */
  export type Course$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Course.lessons
   */
  export type Course$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Course.enrollments
   */
  export type Course$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course.payments
   */
  export type Course$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Course.reviews
   */
  export type Course$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    where?: CourseReviewWhereInput
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    cursor?: CourseReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseReviewScalarFieldEnum | CourseReviewScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    durationSec: number | null
    sortOrder: number | null
  }

  export type LessonSumAggregateOutputType = {
    durationSec: number | null
    sortOrder: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    slug: string | null
    description: string | null
    streamId: string | null
    hlsUrl: string | null
    durationSec: number | null
    thumbnailUrl: string | null
    sortOrder: number | null
    isFreePreview: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    slug: string | null
    description: string | null
    streamId: string | null
    hlsUrl: string | null
    durationSec: number | null
    thumbnailUrl: string | null
    sortOrder: number | null
    isFreePreview: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    courseId: number
    title: number
    slug: number
    description: number
    streamId: number
    hlsUrl: number
    durationSec: number
    thumbnailUrl: number
    sortOrder: number
    isFreePreview: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    durationSec?: true
    sortOrder?: true
  }

  export type LessonSumAggregateInputType = {
    durationSec?: true
    sortOrder?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    slug?: true
    description?: true
    streamId?: true
    hlsUrl?: true
    durationSec?: true
    thumbnailUrl?: true
    sortOrder?: true
    isFreePreview?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    slug?: true
    description?: true
    streamId?: true
    hlsUrl?: true
    durationSec?: true
    thumbnailUrl?: true
    sortOrder?: true
    isFreePreview?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    slug?: true
    description?: true
    streamId?: true
    hlsUrl?: true
    durationSec?: true
    thumbnailUrl?: true
    sortOrder?: true
    isFreePreview?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    courseId: string
    title: string
    slug: string
    description: string | null
    streamId: string | null
    hlsUrl: string | null
    durationSec: number | null
    thumbnailUrl: string | null
    sortOrder: number
    isFreePreview: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    streamId?: boolean
    hlsUrl?: boolean
    durationSec?: boolean
    thumbnailUrl?: boolean
    sortOrder?: boolean
    isFreePreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    progress?: boolean | Lesson$progressArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    streamId?: boolean
    hlsUrl?: boolean
    durationSec?: boolean
    thumbnailUrl?: boolean
    sortOrder?: boolean
    isFreePreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    streamId?: boolean
    hlsUrl?: boolean
    durationSec?: boolean
    thumbnailUrl?: boolean
    sortOrder?: boolean
    isFreePreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    courseId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    streamId?: boolean
    hlsUrl?: boolean
    durationSec?: boolean
    thumbnailUrl?: boolean
    sortOrder?: boolean
    isFreePreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "title" | "slug" | "description" | "streamId" | "hlsUrl" | "durationSec" | "thumbnailUrl" | "sortOrder" | "isFreePreview" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    progress?: boolean | Lesson$progressArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      progress: Prisma.$LessonProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      title: string
      slug: string
      description: string | null
      streamId: string | null
      hlsUrl: string | null
      durationSec: number | null
      thumbnailUrl: string | null
      sortOrder: number
      isFreePreview: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progress<T extends Lesson$progressArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly courseId: FieldRef<"Lesson", 'String'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly slug: FieldRef<"Lesson", 'String'>
    readonly description: FieldRef<"Lesson", 'String'>
    readonly streamId: FieldRef<"Lesson", 'String'>
    readonly hlsUrl: FieldRef<"Lesson", 'String'>
    readonly durationSec: FieldRef<"Lesson", 'Int'>
    readonly thumbnailUrl: FieldRef<"Lesson", 'String'>
    readonly sortOrder: FieldRef<"Lesson", 'Int'>
    readonly isFreePreview: FieldRef<"Lesson", 'Boolean'>
    readonly createdAt: FieldRef<"Lesson", 'DateTime'>
    readonly updatedAt: FieldRef<"Lesson", 'DateTime'>
    readonly deletedAt: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.progress
   */
  export type Lesson$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    cursor?: LessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    source: string | null
    paymentId: string | null
    status: $Enums.EnrollmentStatus | null
    enrolledAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    source: string | null
    paymentId: string | null
    status: $Enums.EnrollmentStatus | null
    enrolledAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    source: number
    paymentId: number
    status: number
    enrolledAt: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnrollmentMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    source?: true
    paymentId?: true
    status?: true
    enrolledAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    source?: true
    paymentId?: true
    status?: true
    enrolledAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    source?: true
    paymentId?: true
    status?: true
    enrolledAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    source: string
    paymentId: string | null
    status: $Enums.EnrollmentStatus
    enrolledAt: Date
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    source?: boolean
    paymentId?: boolean
    status?: boolean
    enrolledAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    payment?: boolean | Enrollment$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    source?: boolean
    paymentId?: boolean
    status?: boolean
    enrolledAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    payment?: boolean | Enrollment$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    source?: boolean
    paymentId?: boolean
    status?: boolean
    enrolledAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    payment?: boolean | Enrollment$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    source?: boolean
    paymentId?: boolean
    status?: boolean
    enrolledAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "source" | "paymentId" | "status" | "enrolledAt" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    payment?: boolean | Enrollment$paymentArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    payment?: boolean | Enrollment$paymentArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    payment?: boolean | Enrollment$paymentArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      source: string
      paymentId: string | null
      status: $Enums.EnrollmentStatus
      enrolledAt: Date
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Enrollment$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Enrollment$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'String'>
    readonly userId: FieldRef<"Enrollment", 'String'>
    readonly courseId: FieldRef<"Enrollment", 'String'>
    readonly source: FieldRef<"Enrollment", 'String'>
    readonly paymentId: FieldRef<"Enrollment", 'String'>
    readonly status: FieldRef<"Enrollment", 'EnrollmentStatus'>
    readonly enrolledAt: FieldRef<"Enrollment", 'DateTime'>
    readonly expiresAt: FieldRef<"Enrollment", 'DateTime'>
    readonly createdAt: FieldRef<"Enrollment", 'DateTime'>
    readonly updatedAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment.payment
   */
  export type Enrollment$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model LessonProgress
   */

  export type AggregateLessonProgress = {
    _count: LessonProgressCountAggregateOutputType | null
    _avg: LessonProgressAvgAggregateOutputType | null
    _sum: LessonProgressSumAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  export type LessonProgressAvgAggregateOutputType = {
    watchedSec: number | null
    lastPosition: number | null
  }

  export type LessonProgressSumAggregateOutputType = {
    watchedSec: number | null
    lastPosition: number | null
  }

  export type LessonProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    lessonId: string | null
    isCompleted: boolean | null
    watchedSec: number | null
    lastPosition: number | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type LessonProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    lessonId: string | null
    isCompleted: boolean | null
    watchedSec: number | null
    lastPosition: number | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type LessonProgressCountAggregateOutputType = {
    id: number
    userId: number
    lessonId: number
    isCompleted: number
    watchedSec: number
    lastPosition: number
    completedAt: number
    updatedAt: number
    _all: number
  }


  export type LessonProgressAvgAggregateInputType = {
    watchedSec?: true
    lastPosition?: true
  }

  export type LessonProgressSumAggregateInputType = {
    watchedSec?: true
    lastPosition?: true
  }

  export type LessonProgressMinAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    isCompleted?: true
    watchedSec?: true
    lastPosition?: true
    completedAt?: true
    updatedAt?: true
  }

  export type LessonProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    isCompleted?: true
    watchedSec?: true
    lastPosition?: true
    completedAt?: true
    updatedAt?: true
  }

  export type LessonProgressCountAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    isCompleted?: true
    watchedSec?: true
    lastPosition?: true
    completedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonProgress to aggregate.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonProgresses
    **/
    _count?: true | LessonProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonProgressMaxAggregateInputType
  }

  export type GetLessonProgressAggregateType<T extends LessonProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonProgress[P]>
      : GetScalarType<T[P], AggregateLessonProgress[P]>
  }




  export type LessonProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithAggregationInput | LessonProgressOrderByWithAggregationInput[]
    by: LessonProgressScalarFieldEnum[] | LessonProgressScalarFieldEnum
    having?: LessonProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonProgressCountAggregateInputType | true
    _avg?: LessonProgressAvgAggregateInputType
    _sum?: LessonProgressSumAggregateInputType
    _min?: LessonProgressMinAggregateInputType
    _max?: LessonProgressMaxAggregateInputType
  }

  export type LessonProgressGroupByOutputType = {
    id: string
    userId: string
    lessonId: string
    isCompleted: boolean
    watchedSec: number
    lastPosition: number
    completedAt: Date | null
    updatedAt: Date
    _count: LessonProgressCountAggregateOutputType | null
    _avg: LessonProgressAvgAggregateOutputType | null
    _sum: LessonProgressSumAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  type GetLessonProgressGroupByPayload<T extends LessonProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
            : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
        }
      >
    >


  export type LessonProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    isCompleted?: boolean
    watchedSec?: boolean
    lastPosition?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    isCompleted?: boolean
    watchedSec?: boolean
    lastPosition?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    isCompleted?: boolean
    watchedSec?: boolean
    lastPosition?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    isCompleted?: boolean
    watchedSec?: boolean
    lastPosition?: boolean
    completedAt?: boolean
    updatedAt?: boolean
  }

  export type LessonProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lessonId" | "isCompleted" | "watchedSec" | "lastPosition" | "completedAt" | "updatedAt", ExtArgs["result"]["lessonProgress"]>
  export type LessonProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $LessonProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonProgress"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      lessonId: string
      isCompleted: boolean
      watchedSec: number
      lastPosition: number
      completedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["lessonProgress"]>
    composites: {}
  }

  type LessonProgressGetPayload<S extends boolean | null | undefined | LessonProgressDefaultArgs> = $Result.GetResult<Prisma.$LessonProgressPayload, S>

  type LessonProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonProgressCountAggregateInputType | true
    }

  export interface LessonProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonProgress'], meta: { name: 'LessonProgress' } }
    /**
     * Find zero or one LessonProgress that matches the filter.
     * @param {LessonProgressFindUniqueArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonProgressFindUniqueArgs>(args: SelectSubset<T, LessonProgressFindUniqueArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonProgressFindUniqueOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindFirstArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonProgressFindFirstArgs>(args?: SelectSubset<T, LessonProgressFindFirstArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindFirstOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany()
     * 
     * // Get first 10 LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonProgressFindManyArgs>(args?: SelectSubset<T, LessonProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonProgress.
     * @param {LessonProgressCreateArgs} args - Arguments to create a LessonProgress.
     * @example
     * // Create one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.create({
     *   data: {
     *     // ... data to create a LessonProgress
     *   }
     * })
     * 
     */
    create<T extends LessonProgressCreateArgs>(args: SelectSubset<T, LessonProgressCreateArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonProgresses.
     * @param {LessonProgressCreateManyArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonProgressCreateManyArgs>(args?: SelectSubset<T, LessonProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonProgresses and returns the data saved in the database.
     * @param {LessonProgressCreateManyAndReturnArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonProgresses and only return the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonProgress.
     * @param {LessonProgressDeleteArgs} args - Arguments to delete one LessonProgress.
     * @example
     * // Delete one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.delete({
     *   where: {
     *     // ... filter to delete one LessonProgress
     *   }
     * })
     * 
     */
    delete<T extends LessonProgressDeleteArgs>(args: SelectSubset<T, LessonProgressDeleteArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonProgress.
     * @param {LessonProgressUpdateArgs} args - Arguments to update one LessonProgress.
     * @example
     * // Update one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonProgressUpdateArgs>(args: SelectSubset<T, LessonProgressUpdateArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonProgresses.
     * @param {LessonProgressDeleteManyArgs} args - Arguments to filter LessonProgresses to delete.
     * @example
     * // Delete a few LessonProgresses
     * const { count } = await prisma.lessonProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonProgressDeleteManyArgs>(args?: SelectSubset<T, LessonProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonProgressUpdateManyArgs>(args: SelectSubset<T, LessonProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonProgresses and returns the data updated in the database.
     * @param {LessonProgressUpdateManyAndReturnArgs} args - Arguments to update many LessonProgresses.
     * @example
     * // Update many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonProgresses and only return the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonProgress.
     * @param {LessonProgressUpsertArgs} args - Arguments to update or create a LessonProgress.
     * @example
     * // Update or create a LessonProgress
     * const lessonProgress = await prisma.lessonProgress.upsert({
     *   create: {
     *     // ... data to create a LessonProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonProgress we want to update
     *   }
     * })
     */
    upsert<T extends LessonProgressUpsertArgs>(args: SelectSubset<T, LessonProgressUpsertArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressCountArgs} args - Arguments to filter LessonProgresses to count.
     * @example
     * // Count the number of LessonProgresses
     * const count = await prisma.lessonProgress.count({
     *   where: {
     *     // ... the filter for the LessonProgresses we want to count
     *   }
     * })
    **/
    count<T extends LessonProgressCountArgs>(
      args?: Subset<T, LessonProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonProgressAggregateArgs>(args: Subset<T, LessonProgressAggregateArgs>): Prisma.PrismaPromise<GetLessonProgressAggregateType<T>>

    /**
     * Group by LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonProgressGroupByArgs['orderBy'] }
        : { orderBy?: LessonProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonProgress model
   */
  readonly fields: LessonProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LessonProgress model
   */
  interface LessonProgressFieldRefs {
    readonly id: FieldRef<"LessonProgress", 'String'>
    readonly userId: FieldRef<"LessonProgress", 'String'>
    readonly lessonId: FieldRef<"LessonProgress", 'String'>
    readonly isCompleted: FieldRef<"LessonProgress", 'Boolean'>
    readonly watchedSec: FieldRef<"LessonProgress", 'Int'>
    readonly lastPosition: FieldRef<"LessonProgress", 'Int'>
    readonly completedAt: FieldRef<"LessonProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"LessonProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonProgress findUnique
   */
  export type LessonProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress findUniqueOrThrow
   */
  export type LessonProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress findFirst
   */
  export type LessonProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress findFirstOrThrow
   */
  export type LessonProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress findMany
   */
  export type LessonProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgresses to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress create
   */
  export type LessonProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonProgress.
     */
    data: XOR<LessonProgressCreateInput, LessonProgressUncheckedCreateInput>
  }

  /**
   * LessonProgress createMany
   */
  export type LessonProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonProgresses.
     */
    data: LessonProgressCreateManyInput | LessonProgressCreateManyInput[]
  }

  /**
   * LessonProgress createManyAndReturn
   */
  export type LessonProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * The data used to create many LessonProgresses.
     */
    data: LessonProgressCreateManyInput | LessonProgressCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonProgress update
   */
  export type LessonProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonProgress.
     */
    data: XOR<LessonProgressUpdateInput, LessonProgressUncheckedUpdateInput>
    /**
     * Choose, which LessonProgress to update.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress updateMany
   */
  export type LessonProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonProgresses.
     */
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which LessonProgresses to update
     */
    where?: LessonProgressWhereInput
    /**
     * Limit how many LessonProgresses to update.
     */
    limit?: number
  }

  /**
   * LessonProgress updateManyAndReturn
   */
  export type LessonProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * The data used to update LessonProgresses.
     */
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which LessonProgresses to update
     */
    where?: LessonProgressWhereInput
    /**
     * Limit how many LessonProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonProgress upsert
   */
  export type LessonProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonProgress to update in case it exists.
     */
    where: LessonProgressWhereUniqueInput
    /**
     * In case the LessonProgress found by the `where` argument doesn't exist, create a new LessonProgress with this data.
     */
    create: XOR<LessonProgressCreateInput, LessonProgressUncheckedCreateInput>
    /**
     * In case the LessonProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonProgressUpdateInput, LessonProgressUncheckedUpdateInput>
  }

  /**
   * LessonProgress delete
   */
  export type LessonProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter which LessonProgress to delete.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress deleteMany
   */
  export type LessonProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonProgresses to delete
     */
    where?: LessonProgressWhereInput
    /**
     * Limit how many LessonProgresses to delete.
     */
    limit?: number
  }

  /**
   * LessonProgress without action
   */
  export type LessonProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    subscriptionId: string | null
    paymentType: $Enums.PaymentType | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    tossPaymentKey: string | null
    tossOrderId: string | null
    tossEventId: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    subscriptionId: string | null
    paymentType: $Enums.PaymentType | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    tossPaymentKey: string | null
    tossOrderId: string | null
    tossEventId: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    subscriptionId: number
    paymentType: number
    amount: number
    currency: number
    status: number
    tossPaymentKey: number
    tossOrderId: number
    tossEventId: number
    paidAt: number
    refundedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    subscriptionId?: true
    paymentType?: true
    amount?: true
    currency?: true
    status?: true
    tossPaymentKey?: true
    tossOrderId?: true
    tossEventId?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    subscriptionId?: true
    paymentType?: true
    amount?: true
    currency?: true
    status?: true
    tossPaymentKey?: true
    tossOrderId?: true
    tossEventId?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    subscriptionId?: true
    paymentType?: true
    amount?: true
    currency?: true
    status?: true
    tossPaymentKey?: true
    tossOrderId?: true
    tossEventId?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    courseId: string | null
    subscriptionId: string | null
    paymentType: $Enums.PaymentType
    amount: number
    currency: string
    status: $Enums.PaymentStatus
    tossPaymentKey: string | null
    tossOrderId: string | null
    tossEventId: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    subscriptionId?: boolean
    paymentType?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    tossPaymentKey?: boolean
    tossOrderId?: boolean
    tossEventId?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | Payment$courseArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
    enrollments?: boolean | Payment$enrollmentsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    subscriptionId?: boolean
    paymentType?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    tossPaymentKey?: boolean
    tossOrderId?: boolean
    tossEventId?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | Payment$courseArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    subscriptionId?: boolean
    paymentType?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    tossPaymentKey?: boolean
    tossOrderId?: boolean
    tossEventId?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | Payment$courseArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    subscriptionId?: boolean
    paymentType?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    tossPaymentKey?: boolean
    tossOrderId?: boolean
    tossEventId?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "subscriptionId" | "paymentType" | "amount" | "currency" | "status" | "tossPaymentKey" | "tossOrderId" | "tossEventId" | "paidAt" | "refundedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | Payment$courseArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
    enrollments?: boolean | Payment$enrollmentsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | Payment$courseArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | Payment$courseArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs> | null
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string | null
      subscriptionId: string | null
      paymentType: $Enums.PaymentType
      amount: number
      currency: string
      status: $Enums.PaymentStatus
      tossPaymentKey: string | null
      tossOrderId: string | null
      tossEventId: string | null
      paidAt: Date | null
      refundedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends Payment$courseArgs<ExtArgs> = {}>(args?: Subset<T, Payment$courseArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscription<T extends Payment$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Payment$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends Payment$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly courseId: FieldRef<"Payment", 'String'>
    readonly subscriptionId: FieldRef<"Payment", 'String'>
    readonly paymentType: FieldRef<"Payment", 'PaymentType'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly tossPaymentKey: FieldRef<"Payment", 'String'>
    readonly tossOrderId: FieldRef<"Payment", 'String'>
    readonly tossEventId: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly refundedAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.course
   */
  export type Payment$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * Payment.subscription
   */
  export type Payment$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Payment.enrollments
   */
  export type Payment$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planType: $Enums.SubscriptionPlanType | null
    tier: $Enums.SubscriptionTier | null
    status: $Enums.SubscriptionStatus | null
    tossBillingKey: string | null
    tossCustomerKey: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    canceledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planType: $Enums.SubscriptionPlanType | null
    tier: $Enums.SubscriptionTier | null
    status: $Enums.SubscriptionStatus | null
    tossBillingKey: string | null
    tossCustomerKey: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    canceledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    planType: number
    tier: number
    status: number
    tossBillingKey: number
    tossCustomerKey: number
    currentPeriodStart: number
    currentPeriodEnd: number
    canceledAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    planType?: true
    tier?: true
    status?: true
    tossBillingKey?: true
    tossCustomerKey?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    canceledAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    planType?: true
    tier?: true
    status?: true
    tossBillingKey?: true
    tossCustomerKey?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    canceledAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    planType?: true
    tier?: true
    status?: true
    tossBillingKey?: true
    tossCustomerKey?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    canceledAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    planType: $Enums.SubscriptionPlanType
    tier: $Enums.SubscriptionTier
    status: $Enums.SubscriptionStatus
    tossBillingKey: string | null
    tossCustomerKey: string | null
    currentPeriodStart: Date
    currentPeriodEnd: Date
    canceledAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planType?: boolean
    tier?: boolean
    status?: boolean
    tossBillingKey?: boolean
    tossCustomerKey?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    canceledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planType?: boolean
    tier?: boolean
    status?: boolean
    tossBillingKey?: boolean
    tossCustomerKey?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    canceledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planType?: boolean
    tier?: boolean
    status?: boolean
    tossBillingKey?: boolean
    tossCustomerKey?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    canceledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    planType?: boolean
    tier?: boolean
    status?: boolean
    tossBillingKey?: boolean
    tossCustomerKey?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    canceledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planType" | "tier" | "status" | "tossBillingKey" | "tossCustomerKey" | "currentPeriodStart" | "currentPeriodEnd" | "canceledAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planType: $Enums.SubscriptionPlanType
      tier: $Enums.SubscriptionTier
      status: $Enums.SubscriptionStatus
      tossBillingKey: string | null
      tossCustomerKey: string | null
      currentPeriodStart: Date
      currentPeriodEnd: Date
      canceledAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Subscription$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly planType: FieldRef<"Subscription", 'SubscriptionPlanType'>
    readonly tier: FieldRef<"Subscription", 'SubscriptionTier'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly tossBillingKey: FieldRef<"Subscription", 'String'>
    readonly tossCustomerKey: FieldRef<"Subscription", 'String'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly canceledAt: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
    readonly deletedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.payments
   */
  export type Subscription$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model CourseReview
   */

  export type AggregateCourseReview = {
    _count: CourseReviewCountAggregateOutputType | null
    _avg: CourseReviewAvgAggregateOutputType | null
    _sum: CourseReviewSumAggregateOutputType | null
    _min: CourseReviewMinAggregateOutputType | null
    _max: CourseReviewMaxAggregateOutputType | null
  }

  export type CourseReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type CourseReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type CourseReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CourseReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CourseReviewCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CourseReviewAvgAggregateInputType = {
    rating?: true
  }

  export type CourseReviewSumAggregateInputType = {
    rating?: true
  }

  export type CourseReviewMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CourseReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CourseReviewCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CourseReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseReview to aggregate.
     */
    where?: CourseReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseReviews to fetch.
     */
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseReviews
    **/
    _count?: true | CourseReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseReviewMaxAggregateInputType
  }

  export type GetCourseReviewAggregateType<T extends CourseReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseReview[P]>
      : GetScalarType<T[P], AggregateCourseReview[P]>
  }




  export type CourseReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseReviewWhereInput
    orderBy?: CourseReviewOrderByWithAggregationInput | CourseReviewOrderByWithAggregationInput[]
    by: CourseReviewScalarFieldEnum[] | CourseReviewScalarFieldEnum
    having?: CourseReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseReviewCountAggregateInputType | true
    _avg?: CourseReviewAvgAggregateInputType
    _sum?: CourseReviewSumAggregateInputType
    _min?: CourseReviewMinAggregateInputType
    _max?: CourseReviewMaxAggregateInputType
  }

  export type CourseReviewGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CourseReviewCountAggregateOutputType | null
    _avg: CourseReviewAvgAggregateOutputType | null
    _sum: CourseReviewSumAggregateOutputType | null
    _min: CourseReviewMinAggregateOutputType | null
    _max: CourseReviewMaxAggregateOutputType | null
  }

  type GetCourseReviewGroupByPayload<T extends CourseReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseReviewGroupByOutputType[P]>
            : GetScalarType<T[P], CourseReviewGroupByOutputType[P]>
        }
      >
    >


  export type CourseReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseReview"]>

  export type CourseReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseReview"]>

  export type CourseReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseReview"]>

  export type CourseReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CourseReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "rating" | "comment" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["courseReview"]>
  export type CourseReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseReview"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["courseReview"]>
    composites: {}
  }

  type CourseReviewGetPayload<S extends boolean | null | undefined | CourseReviewDefaultArgs> = $Result.GetResult<Prisma.$CourseReviewPayload, S>

  type CourseReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseReviewCountAggregateInputType | true
    }

  export interface CourseReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseReview'], meta: { name: 'CourseReview' } }
    /**
     * Find zero or one CourseReview that matches the filter.
     * @param {CourseReviewFindUniqueArgs} args - Arguments to find a CourseReview
     * @example
     * // Get one CourseReview
     * const courseReview = await prisma.courseReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseReviewFindUniqueArgs>(args: SelectSubset<T, CourseReviewFindUniqueArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseReviewFindUniqueOrThrowArgs} args - Arguments to find a CourseReview
     * @example
     * // Get one CourseReview
     * const courseReview = await prisma.courseReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewFindFirstArgs} args - Arguments to find a CourseReview
     * @example
     * // Get one CourseReview
     * const courseReview = await prisma.courseReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseReviewFindFirstArgs>(args?: SelectSubset<T, CourseReviewFindFirstArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewFindFirstOrThrowArgs} args - Arguments to find a CourseReview
     * @example
     * // Get one CourseReview
     * const courseReview = await prisma.courseReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseReviews
     * const courseReviews = await prisma.courseReview.findMany()
     * 
     * // Get first 10 CourseReviews
     * const courseReviews = await prisma.courseReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseReviewWithIdOnly = await prisma.courseReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseReviewFindManyArgs>(args?: SelectSubset<T, CourseReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseReview.
     * @param {CourseReviewCreateArgs} args - Arguments to create a CourseReview.
     * @example
     * // Create one CourseReview
     * const CourseReview = await prisma.courseReview.create({
     *   data: {
     *     // ... data to create a CourseReview
     *   }
     * })
     * 
     */
    create<T extends CourseReviewCreateArgs>(args: SelectSubset<T, CourseReviewCreateArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseReviews.
     * @param {CourseReviewCreateManyArgs} args - Arguments to create many CourseReviews.
     * @example
     * // Create many CourseReviews
     * const courseReview = await prisma.courseReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseReviewCreateManyArgs>(args?: SelectSubset<T, CourseReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseReviews and returns the data saved in the database.
     * @param {CourseReviewCreateManyAndReturnArgs} args - Arguments to create many CourseReviews.
     * @example
     * // Create many CourseReviews
     * const courseReview = await prisma.courseReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseReviews and only return the `id`
     * const courseReviewWithIdOnly = await prisma.courseReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseReview.
     * @param {CourseReviewDeleteArgs} args - Arguments to delete one CourseReview.
     * @example
     * // Delete one CourseReview
     * const CourseReview = await prisma.courseReview.delete({
     *   where: {
     *     // ... filter to delete one CourseReview
     *   }
     * })
     * 
     */
    delete<T extends CourseReviewDeleteArgs>(args: SelectSubset<T, CourseReviewDeleteArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseReview.
     * @param {CourseReviewUpdateArgs} args - Arguments to update one CourseReview.
     * @example
     * // Update one CourseReview
     * const courseReview = await prisma.courseReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseReviewUpdateArgs>(args: SelectSubset<T, CourseReviewUpdateArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseReviews.
     * @param {CourseReviewDeleteManyArgs} args - Arguments to filter CourseReviews to delete.
     * @example
     * // Delete a few CourseReviews
     * const { count } = await prisma.courseReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseReviewDeleteManyArgs>(args?: SelectSubset<T, CourseReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseReviews
     * const courseReview = await prisma.courseReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseReviewUpdateManyArgs>(args: SelectSubset<T, CourseReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseReviews and returns the data updated in the database.
     * @param {CourseReviewUpdateManyAndReturnArgs} args - Arguments to update many CourseReviews.
     * @example
     * // Update many CourseReviews
     * const courseReview = await prisma.courseReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseReviews and only return the `id`
     * const courseReviewWithIdOnly = await prisma.courseReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseReview.
     * @param {CourseReviewUpsertArgs} args - Arguments to update or create a CourseReview.
     * @example
     * // Update or create a CourseReview
     * const courseReview = await prisma.courseReview.upsert({
     *   create: {
     *     // ... data to create a CourseReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseReview we want to update
     *   }
     * })
     */
    upsert<T extends CourseReviewUpsertArgs>(args: SelectSubset<T, CourseReviewUpsertArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewCountArgs} args - Arguments to filter CourseReviews to count.
     * @example
     * // Count the number of CourseReviews
     * const count = await prisma.courseReview.count({
     *   where: {
     *     // ... the filter for the CourseReviews we want to count
     *   }
     * })
    **/
    count<T extends CourseReviewCountArgs>(
      args?: Subset<T, CourseReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseReviewAggregateArgs>(args: Subset<T, CourseReviewAggregateArgs>): Prisma.PrismaPromise<GetCourseReviewAggregateType<T>>

    /**
     * Group by CourseReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseReviewGroupByArgs['orderBy'] }
        : { orderBy?: CourseReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseReview model
   */
  readonly fields: CourseReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseReview model
   */
  interface CourseReviewFieldRefs {
    readonly id: FieldRef<"CourseReview", 'String'>
    readonly userId: FieldRef<"CourseReview", 'String'>
    readonly courseId: FieldRef<"CourseReview", 'String'>
    readonly rating: FieldRef<"CourseReview", 'Int'>
    readonly comment: FieldRef<"CourseReview", 'String'>
    readonly createdAt: FieldRef<"CourseReview", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseReview", 'DateTime'>
    readonly deletedAt: FieldRef<"CourseReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseReview findUnique
   */
  export type CourseReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter, which CourseReview to fetch.
     */
    where: CourseReviewWhereUniqueInput
  }

  /**
   * CourseReview findUniqueOrThrow
   */
  export type CourseReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter, which CourseReview to fetch.
     */
    where: CourseReviewWhereUniqueInput
  }

  /**
   * CourseReview findFirst
   */
  export type CourseReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter, which CourseReview to fetch.
     */
    where?: CourseReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseReviews to fetch.
     */
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseReviews.
     */
    cursor?: CourseReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseReviews.
     */
    distinct?: CourseReviewScalarFieldEnum | CourseReviewScalarFieldEnum[]
  }

  /**
   * CourseReview findFirstOrThrow
   */
  export type CourseReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter, which CourseReview to fetch.
     */
    where?: CourseReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseReviews to fetch.
     */
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseReviews.
     */
    cursor?: CourseReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseReviews.
     */
    distinct?: CourseReviewScalarFieldEnum | CourseReviewScalarFieldEnum[]
  }

  /**
   * CourseReview findMany
   */
  export type CourseReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter, which CourseReviews to fetch.
     */
    where?: CourseReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseReviews to fetch.
     */
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseReviews.
     */
    cursor?: CourseReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseReviews.
     */
    distinct?: CourseReviewScalarFieldEnum | CourseReviewScalarFieldEnum[]
  }

  /**
   * CourseReview create
   */
  export type CourseReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseReview.
     */
    data: XOR<CourseReviewCreateInput, CourseReviewUncheckedCreateInput>
  }

  /**
   * CourseReview createMany
   */
  export type CourseReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseReviews.
     */
    data: CourseReviewCreateManyInput | CourseReviewCreateManyInput[]
  }

  /**
   * CourseReview createManyAndReturn
   */
  export type CourseReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * The data used to create many CourseReviews.
     */
    data: CourseReviewCreateManyInput | CourseReviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseReview update
   */
  export type CourseReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseReview.
     */
    data: XOR<CourseReviewUpdateInput, CourseReviewUncheckedUpdateInput>
    /**
     * Choose, which CourseReview to update.
     */
    where: CourseReviewWhereUniqueInput
  }

  /**
   * CourseReview updateMany
   */
  export type CourseReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseReviews.
     */
    data: XOR<CourseReviewUpdateManyMutationInput, CourseReviewUncheckedUpdateManyInput>
    /**
     * Filter which CourseReviews to update
     */
    where?: CourseReviewWhereInput
    /**
     * Limit how many CourseReviews to update.
     */
    limit?: number
  }

  /**
   * CourseReview updateManyAndReturn
   */
  export type CourseReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * The data used to update CourseReviews.
     */
    data: XOR<CourseReviewUpdateManyMutationInput, CourseReviewUncheckedUpdateManyInput>
    /**
     * Filter which CourseReviews to update
     */
    where?: CourseReviewWhereInput
    /**
     * Limit how many CourseReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseReview upsert
   */
  export type CourseReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseReview to update in case it exists.
     */
    where: CourseReviewWhereUniqueInput
    /**
     * In case the CourseReview found by the `where` argument doesn't exist, create a new CourseReview with this data.
     */
    create: XOR<CourseReviewCreateInput, CourseReviewUncheckedCreateInput>
    /**
     * In case the CourseReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseReviewUpdateInput, CourseReviewUncheckedUpdateInput>
  }

  /**
   * CourseReview delete
   */
  export type CourseReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter which CourseReview to delete.
     */
    where: CourseReviewWhereUniqueInput
  }

  /**
   * CourseReview deleteMany
   */
  export type CourseReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseReviews to delete
     */
    where?: CourseReviewWhereInput
    /**
     * Limit how many CourseReviews to delete.
     */
    limit?: number
  }

  /**
   * CourseReview without action
   */
  export type CourseReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    bio: 'bio',
    skillLevel: 'skillLevel',
    role: 'role',
    joinDate: 'joinDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    instructorId: 'instructorId',
    categoryId: 'categoryId',
    title: 'title',
    description: 'description',
    thumbnailUrl: 'thumbnailUrl',
    skillLevel: 'skillLevel',
    price: 'price',
    isPublished: 'isPublished',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    title: 'title',
    slug: 'slug',
    description: 'description',
    streamId: 'streamId',
    hlsUrl: 'hlsUrl',
    durationSec: 'durationSec',
    thumbnailUrl: 'thumbnailUrl',
    sortOrder: 'sortOrder',
    isFreePreview: 'isFreePreview',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    source: 'source',
    paymentId: 'paymentId',
    status: 'status',
    enrolledAt: 'enrolledAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const LessonProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    isCompleted: 'isCompleted',
    watchedSec: 'watchedSec',
    lastPosition: 'lastPosition',
    completedAt: 'completedAt',
    updatedAt: 'updatedAt'
  };

  export type LessonProgressScalarFieldEnum = (typeof LessonProgressScalarFieldEnum)[keyof typeof LessonProgressScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    subscriptionId: 'subscriptionId',
    paymentType: 'paymentType',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    tossPaymentKey: 'tossPaymentKey',
    tossOrderId: 'tossOrderId',
    tossEventId: 'tossEventId',
    paidAt: 'paidAt',
    refundedAt: 'refundedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planType: 'planType',
    tier: 'tier',
    status: 'status',
    tossBillingKey: 'tossBillingKey',
    tossCustomerKey: 'tossCustomerKey',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    canceledAt: 'canceledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const CourseReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CourseReviewScalarFieldEnum = (typeof CourseReviewScalarFieldEnum)[keyof typeof CourseReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'SkillLevel'
   */
  export type EnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus'
   */
  export type EnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionPlanType'
   */
  export type EnumSubscriptionPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlanType'>
    


  /**
   * Reference to a field of type 'SubscriptionTier'
   */
  export type EnumSubscriptionTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionTier'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    displayName?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    skillLevel?: EnumSkillLevelFilter<"Profile"> | $Enums.SkillLevel
    role?: EnumRoleFilter<"Profile"> | $Enums.Role
    joinDate?: DateTimeFilter<"Profile"> | Date | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    courses?: CourseListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    progress?: LessonProgressListRelationFilter
    payments?: PaymentListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    reviews?: CourseReviewListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    displayName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    skillLevel?: SortOrder
    role?: SortOrder
    joinDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    courses?: CourseOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    progress?: LessonProgressOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    reviews?: CourseReviewOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    displayName?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    skillLevel?: EnumSkillLevelFilter<"Profile"> | $Enums.SkillLevel
    role?: EnumRoleFilter<"Profile"> | $Enums.Role
    joinDate?: DateTimeFilter<"Profile"> | Date | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    courses?: CourseListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    progress?: LessonProgressListRelationFilter
    payments?: PaymentListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    reviews?: CourseReviewListRelationFilter
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    displayName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    skillLevel?: SortOrder
    role?: SortOrder
    joinDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    displayName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    skillLevel?: EnumSkillLevelWithAggregatesFilter<"Profile"> | $Enums.SkillLevel
    role?: EnumRoleWithAggregatesFilter<"Profile"> | $Enums.Role
    joinDate?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    courses?: CourseListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    courses?: CourseListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    instructorId?: StringFilter<"Course"> | string
    categoryId?: IntNullableFilter<"Course"> | number | null
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    thumbnailUrl?: StringNullableFilter<"Course"> | string | null
    skillLevel?: EnumSkillLevelFilter<"Course"> | $Enums.SkillLevel
    price?: IntFilter<"Course"> | number
    isPublished?: BoolFilter<"Course"> | boolean
    publishedAt?: DateTimeNullableFilter<"Course"> | Date | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Course"> | Date | string | null
    instructor?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    lessons?: LessonListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    payments?: PaymentListRelationFilter
    reviews?: CourseReviewListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    skillLevel?: SortOrder
    price?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    instructor?: ProfileOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    reviews?: CourseReviewOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    instructorId?: StringFilter<"Course"> | string
    categoryId?: IntNullableFilter<"Course"> | number | null
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    thumbnailUrl?: StringNullableFilter<"Course"> | string | null
    skillLevel?: EnumSkillLevelFilter<"Course"> | $Enums.SkillLevel
    price?: IntFilter<"Course"> | number
    isPublished?: BoolFilter<"Course"> | boolean
    publishedAt?: DateTimeNullableFilter<"Course"> | Date | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Course"> | Date | string | null
    instructor?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    lessons?: LessonListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    payments?: PaymentListRelationFilter
    reviews?: CourseReviewListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    skillLevel?: SortOrder
    price?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    instructorId?: StringWithAggregatesFilter<"Course"> | string
    categoryId?: IntNullableWithAggregatesFilter<"Course"> | number | null
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Course"> | string | null
    skillLevel?: EnumSkillLevelWithAggregatesFilter<"Course"> | $Enums.SkillLevel
    price?: IntWithAggregatesFilter<"Course"> | number
    isPublished?: BoolWithAggregatesFilter<"Course"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Course"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Course"> | Date | string | null
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    courseId?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    slug?: StringFilter<"Lesson"> | string
    description?: StringNullableFilter<"Lesson"> | string | null
    streamId?: StringNullableFilter<"Lesson"> | string | null
    hlsUrl?: StringNullableFilter<"Lesson"> | string | null
    durationSec?: IntNullableFilter<"Lesson"> | number | null
    thumbnailUrl?: StringNullableFilter<"Lesson"> | string | null
    sortOrder?: IntFilter<"Lesson"> | number
    isFreePreview?: BoolFilter<"Lesson"> | boolean
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Lesson"> | Date | string | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    progress?: LessonProgressListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    streamId?: SortOrderInput | SortOrder
    hlsUrl?: SortOrderInput | SortOrder
    durationSec?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isFreePreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    course?: CourseOrderByWithRelationInput
    progress?: LessonProgressOrderByRelationAggregateInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_slug?: LessonCourseIdSlugCompoundUniqueInput
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    courseId?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    slug?: StringFilter<"Lesson"> | string
    description?: StringNullableFilter<"Lesson"> | string | null
    streamId?: StringNullableFilter<"Lesson"> | string | null
    hlsUrl?: StringNullableFilter<"Lesson"> | string | null
    durationSec?: IntNullableFilter<"Lesson"> | number | null
    thumbnailUrl?: StringNullableFilter<"Lesson"> | string | null
    sortOrder?: IntFilter<"Lesson"> | number
    isFreePreview?: BoolFilter<"Lesson"> | boolean
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Lesson"> | Date | string | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    progress?: LessonProgressListRelationFilter
  }, "id" | "courseId_slug">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    streamId?: SortOrderInput | SortOrder
    hlsUrl?: SortOrderInput | SortOrder
    durationSec?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isFreePreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    courseId?: StringWithAggregatesFilter<"Lesson"> | string
    title?: StringWithAggregatesFilter<"Lesson"> | string
    slug?: StringWithAggregatesFilter<"Lesson"> | string
    description?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    streamId?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    hlsUrl?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    durationSec?: IntNullableWithAggregatesFilter<"Lesson"> | number | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Lesson"> | number
    isFreePreview?: BoolWithAggregatesFilter<"Lesson"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Lesson"> | Date | string | null
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    source?: StringFilter<"Enrollment"> | string
    paymentId?: StringNullableFilter<"Enrollment"> | string | null
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    source?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseId?: EnrollmentUserIdCourseIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    source?: StringFilter<"Enrollment"> | string
    paymentId?: StringNullableFilter<"Enrollment"> | string | null
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "userId_courseId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    source?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollment"> | string
    userId?: StringWithAggregatesFilter<"Enrollment"> | string
    courseId?: StringWithAggregatesFilter<"Enrollment"> | string
    source?: StringWithAggregatesFilter<"Enrollment"> | string
    paymentId?: StringNullableWithAggregatesFilter<"Enrollment"> | string | null
    status?: EnumEnrollmentStatusWithAggregatesFilter<"Enrollment"> | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
  }

  export type LessonProgressWhereInput = {
    AND?: LessonProgressWhereInput | LessonProgressWhereInput[]
    OR?: LessonProgressWhereInput[]
    NOT?: LessonProgressWhereInput | LessonProgressWhereInput[]
    id?: StringFilter<"LessonProgress"> | string
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    isCompleted?: BoolFilter<"LessonProgress"> | boolean
    watchedSec?: IntFilter<"LessonProgress"> | number
    lastPosition?: IntFilter<"LessonProgress"> | number
    completedAt?: DateTimeNullableFilter<"LessonProgress"> | Date | string | null
    updatedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type LessonProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    isCompleted?: SortOrder
    watchedSec?: SortOrder
    lastPosition?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type LessonProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_lessonId?: LessonProgressUserIdLessonIdCompoundUniqueInput
    AND?: LessonProgressWhereInput | LessonProgressWhereInput[]
    OR?: LessonProgressWhereInput[]
    NOT?: LessonProgressWhereInput | LessonProgressWhereInput[]
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    isCompleted?: BoolFilter<"LessonProgress"> | boolean
    watchedSec?: IntFilter<"LessonProgress"> | number
    lastPosition?: IntFilter<"LessonProgress"> | number
    completedAt?: DateTimeNullableFilter<"LessonProgress"> | Date | string | null
    updatedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "userId_lessonId">

  export type LessonProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    isCompleted?: SortOrder
    watchedSec?: SortOrder
    lastPosition?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: LessonProgressCountOrderByAggregateInput
    _avg?: LessonProgressAvgOrderByAggregateInput
    _max?: LessonProgressMaxOrderByAggregateInput
    _min?: LessonProgressMinOrderByAggregateInput
    _sum?: LessonProgressSumOrderByAggregateInput
  }

  export type LessonProgressScalarWhereWithAggregatesInput = {
    AND?: LessonProgressScalarWhereWithAggregatesInput | LessonProgressScalarWhereWithAggregatesInput[]
    OR?: LessonProgressScalarWhereWithAggregatesInput[]
    NOT?: LessonProgressScalarWhereWithAggregatesInput | LessonProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonProgress"> | string
    userId?: StringWithAggregatesFilter<"LessonProgress"> | string
    lessonId?: StringWithAggregatesFilter<"LessonProgress"> | string
    isCompleted?: BoolWithAggregatesFilter<"LessonProgress"> | boolean
    watchedSec?: IntWithAggregatesFilter<"LessonProgress"> | number
    lastPosition?: IntWithAggregatesFilter<"LessonProgress"> | number
    completedAt?: DateTimeNullableWithAggregatesFilter<"LessonProgress"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"LessonProgress"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    courseId?: StringNullableFilter<"Payment"> | string | null
    subscriptionId?: StringNullableFilter<"Payment"> | string | null
    paymentType?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    tossPaymentKey?: StringNullableFilter<"Payment"> | string | null
    tossOrderId?: StringNullableFilter<"Payment"> | string | null
    tossEventId?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    paymentType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    tossPaymentKey?: SortOrderInput | SortOrder
    tossOrderId?: SortOrderInput | SortOrder
    tossEventId?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tossOrderId?: string
    tossEventId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    courseId?: StringNullableFilter<"Payment"> | string | null
    subscriptionId?: StringNullableFilter<"Payment"> | string | null
    paymentType?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    tossPaymentKey?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
  }, "id" | "tossOrderId" | "tossEventId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    paymentType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    tossPaymentKey?: SortOrderInput | SortOrder
    tossOrderId?: SortOrderInput | SortOrder
    tossEventId?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    courseId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    subscriptionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paymentType?: EnumPaymentTypeWithAggregatesFilter<"Payment"> | $Enums.PaymentType
    amount?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    tossPaymentKey?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    tossOrderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    tossEventId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    planType?: EnumSubscriptionPlanTypeFilter<"Subscription"> | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFilter<"Subscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    tossBillingKey?: StringNullableFilter<"Subscription"> | string | null
    tossCustomerKey?: StringNullableFilter<"Subscription"> | string | null
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planType?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    tossBillingKey?: SortOrderInput | SortOrder
    tossCustomerKey?: SortOrderInput | SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: ProfileOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: StringFilter<"Subscription"> | string
    planType?: EnumSubscriptionPlanTypeFilter<"Subscription"> | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFilter<"Subscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    tossBillingKey?: StringNullableFilter<"Subscription"> | string | null
    tossCustomerKey?: StringNullableFilter<"Subscription"> | string | null
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planType?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    tossBillingKey?: SortOrderInput | SortOrder
    tossCustomerKey?: SortOrderInput | SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    planType?: EnumSubscriptionPlanTypeWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    tossBillingKey?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    tossCustomerKey?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    currentPeriodStart?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
  }

  export type CourseReviewWhereInput = {
    AND?: CourseReviewWhereInput | CourseReviewWhereInput[]
    OR?: CourseReviewWhereInput[]
    NOT?: CourseReviewWhereInput | CourseReviewWhereInput[]
    id?: StringFilter<"CourseReview"> | string
    userId?: StringFilter<"CourseReview"> | string
    courseId?: StringFilter<"CourseReview"> | string
    rating?: IntFilter<"CourseReview"> | number
    comment?: StringNullableFilter<"CourseReview"> | string | null
    createdAt?: DateTimeFilter<"CourseReview"> | Date | string
    updatedAt?: DateTimeFilter<"CourseReview"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CourseReview"> | Date | string | null
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: ProfileOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type CourseReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseId?: CourseReviewUserIdCourseIdCompoundUniqueInput
    AND?: CourseReviewWhereInput | CourseReviewWhereInput[]
    OR?: CourseReviewWhereInput[]
    NOT?: CourseReviewWhereInput | CourseReviewWhereInput[]
    userId?: StringFilter<"CourseReview"> | string
    courseId?: StringFilter<"CourseReview"> | string
    rating?: IntFilter<"CourseReview"> | number
    comment?: StringNullableFilter<"CourseReview"> | string | null
    createdAt?: DateTimeFilter<"CourseReview"> | Date | string
    updatedAt?: DateTimeFilter<"CourseReview"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CourseReview"> | Date | string | null
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "userId_courseId">

  export type CourseReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CourseReviewCountOrderByAggregateInput
    _avg?: CourseReviewAvgOrderByAggregateInput
    _max?: CourseReviewMaxOrderByAggregateInput
    _min?: CourseReviewMinOrderByAggregateInput
    _sum?: CourseReviewSumOrderByAggregateInput
  }

  export type CourseReviewScalarWhereWithAggregatesInput = {
    AND?: CourseReviewScalarWhereWithAggregatesInput | CourseReviewScalarWhereWithAggregatesInput[]
    OR?: CourseReviewScalarWhereWithAggregatesInput[]
    NOT?: CourseReviewScalarWhereWithAggregatesInput | CourseReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseReview"> | string
    userId?: StringWithAggregatesFilter<"CourseReview"> | string
    courseId?: StringWithAggregatesFilter<"CourseReview"> | string
    rating?: IntWithAggregatesFilter<"CourseReview"> | number
    comment?: StringNullableWithAggregatesFilter<"CourseReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CourseReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseReview"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CourseReview"> | Date | string | null
  }

  export type ProfileCreateInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseCreateNestedManyWithoutInstructorInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    reviews?: CourseReviewCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    name: string
    slug: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    courses?: CourseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    instructor: ProfileCreateNestedOneWithoutCoursesInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    lessons?: LessonCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    payments?: PaymentCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    instructorId: string
    categoryId?: number | null
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: ProfileUpdateOneRequiredWithoutCoursesNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    payments?: PaymentUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    instructorId: string
    categoryId?: number | null
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LessonCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    streamId?: string | null
    hlsUrl?: string | null
    durationSec?: number | null
    thumbnailUrl?: string | null
    sortOrder?: number
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    course: CourseCreateNestedOneWithoutLessonsInput
    progress?: LessonProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    courseId: string
    title: string
    slug: string
    description?: string | null
    streamId?: string | null
    hlsUrl?: string | null
    durationSec?: number | null
    thumbnailUrl?: string | null
    sortOrder?: number
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    progress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    hlsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
    progress?: LessonProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    hlsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: string
    courseId: string
    title: string
    slug: string
    description?: string | null
    streamId?: string | null
    hlsUrl?: string | null
    durationSec?: number | null
    thumbnailUrl?: string | null
    sortOrder?: number
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    hlsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    hlsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentCreateInput = {
    id?: string
    source?: string
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
    payment?: PaymentCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    source?: string
    paymentId?: string | null
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
    payment?: PaymentUpdateOneWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    source?: string
    paymentId?: string | null
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateInput = {
    id?: string
    isCompleted?: boolean
    watchedSec?: number
    lastPosition?: number
    completedAt?: Date | string | null
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutProgressInput
    lesson: LessonCreateNestedOneWithoutProgressInput
  }

  export type LessonProgressUncheckedCreateInput = {
    id?: string
    userId: string
    lessonId: string
    isCompleted?: boolean
    watchedSec?: number
    lastPosition?: number
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type LessonProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedSec?: IntFieldUpdateOperationsInput | number
    lastPosition?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutProgressNestedInput
    lesson?: LessonUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedSec?: IntFieldUpdateOperationsInput | number
    lastPosition?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateManyInput = {
    id?: string
    userId: string
    lessonId: string
    isCompleted?: boolean
    watchedSec?: number
    lastPosition?: number
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type LessonProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedSec?: IntFieldUpdateOperationsInput | number
    lastPosition?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedSec?: IntFieldUpdateOperationsInput | number
    lastPosition?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutPaymentsInput
    course?: CourseCreateNestedOneWithoutPaymentsInput
    subscription?: SubscriptionCreateNestedOneWithoutPaymentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    courseId?: string | null
    subscriptionId?: string | null
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutPaymentsNestedInput
    course?: CourseUpdateOneWithoutPaymentsNestedInput
    subscription?: SubscriptionUpdateOneWithoutPaymentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    courseId?: string | null
    subscriptionId?: string | null
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    planType: $Enums.SubscriptionPlanType
    tier: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    tossBillingKey?: string | null
    tossCustomerKey?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: ProfileCreateNestedOneWithoutSubscriptionsInput
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    planType: $Enums.SubscriptionPlanType
    tier: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    tossBillingKey?: string | null
    tossCustomerKey?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumSubscriptionPlanTypeFieldUpdateOperationsInput | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    tossBillingKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossCustomerKey?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: ProfileUpdateOneRequiredWithoutSubscriptionsNestedInput
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planType?: EnumSubscriptionPlanTypeFieldUpdateOperationsInput | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    tossBillingKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossCustomerKey?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    planType: $Enums.SubscriptionPlanType
    tier: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    tossBillingKey?: string | null
    tossCustomerKey?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumSubscriptionPlanTypeFieldUpdateOperationsInput | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    tossBillingKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossCustomerKey?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planType?: EnumSubscriptionPlanTypeFieldUpdateOperationsInput | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    tossBillingKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossCustomerKey?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: ProfileCreateNestedOneWithoutReviewsInput
    course: CourseCreateNestedOneWithoutReviewsInput
  }

  export type CourseReviewUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CourseReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: ProfileUpdateOneRequiredWithoutReviewsNestedInput
    course?: CourseUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type CourseReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseReviewCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CourseReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[]
    notIn?: $Enums.SkillLevel[]
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type LessonProgressListRelationFilter = {
    every?: LessonProgressWhereInput
    some?: LessonProgressWhereInput
    none?: LessonProgressWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type CourseReviewListRelationFilter = {
    every?: CourseReviewWhereInput
    some?: CourseReviewWhereInput
    none?: CourseReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    skillLevel?: SortOrder
    role?: SortOrder
    joinDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    skillLevel?: SortOrder
    role?: SortOrder
    joinDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    skillLevel?: SortOrder
    role?: SortOrder
    joinDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[]
    notIn?: $Enums.SkillLevel[]
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    skillLevel?: SortOrder
    price?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    categoryId?: SortOrder
    price?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    skillLevel?: SortOrder
    price?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    skillLevel?: SortOrder
    price?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    categoryId?: SortOrder
    price?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type LessonCourseIdSlugCompoundUniqueInput = {
    courseId: string
    slug: string
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    streamId?: SortOrder
    hlsUrl?: SortOrder
    durationSec?: SortOrder
    thumbnailUrl?: SortOrder
    sortOrder?: SortOrder
    isFreePreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    durationSec?: SortOrder
    sortOrder?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    streamId?: SortOrder
    hlsUrl?: SortOrder
    durationSec?: SortOrder
    thumbnailUrl?: SortOrder
    sortOrder?: SortOrder
    isFreePreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    streamId?: SortOrder
    hlsUrl?: SortOrder
    durationSec?: SortOrder
    thumbnailUrl?: SortOrder
    sortOrder?: SortOrder
    isFreePreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    durationSec?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[]
    notIn?: $Enums.EnrollmentStatus[]
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type EnrollmentUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    source?: SortOrder
    paymentId?: SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    source?: SortOrder
    paymentId?: SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    source?: SortOrder
    paymentId?: SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[]
    notIn?: $Enums.EnrollmentStatus[]
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type LessonProgressUserIdLessonIdCompoundUniqueInput = {
    userId: string
    lessonId: string
  }

  export type LessonProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    isCompleted?: SortOrder
    watchedSec?: SortOrder
    lastPosition?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonProgressAvgOrderByAggregateInput = {
    watchedSec?: SortOrder
    lastPosition?: SortOrder
  }

  export type LessonProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    isCompleted?: SortOrder
    watchedSec?: SortOrder
    lastPosition?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    isCompleted?: SortOrder
    watchedSec?: SortOrder
    lastPosition?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonProgressSumOrderByAggregateInput = {
    watchedSec?: SortOrder
    lastPosition?: SortOrder
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type CourseNullableScalarRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    subscriptionId?: SortOrder
    paymentType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    tossPaymentKey?: SortOrder
    tossOrderId?: SortOrder
    tossEventId?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    subscriptionId?: SortOrder
    paymentType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    tossPaymentKey?: SortOrder
    tossOrderId?: SortOrder
    tossEventId?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    subscriptionId?: SortOrder
    paymentType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    tossPaymentKey?: SortOrder
    tossOrderId?: SortOrder
    tossEventId?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumSubscriptionPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlanType | EnumSubscriptionPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlanType[]
    notIn?: $Enums.SubscriptionPlanType[]
    not?: NestedEnumSubscriptionPlanTypeFilter<$PrismaModel> | $Enums.SubscriptionPlanType
  }

  export type EnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[]
    notIn?: $Enums.SubscriptionTier[]
    not?: NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planType?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    tossBillingKey?: SortOrder
    tossCustomerKey?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planType?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    tossBillingKey?: SortOrder
    tossCustomerKey?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planType?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    tossBillingKey?: SortOrder
    tossCustomerKey?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumSubscriptionPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlanType | EnumSubscriptionPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlanType[]
    notIn?: $Enums.SubscriptionPlanType[]
    not?: NestedEnumSubscriptionPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[]
    notIn?: $Enums.SubscriptionTier[]
    not?: NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTierFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTierFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type CourseReviewUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type CourseReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CourseReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CourseReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CourseReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CourseReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CourseCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type LessonProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type CourseReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput> | CourseReviewCreateWithoutUserInput[] | CourseReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutUserInput | CourseReviewCreateOrConnectWithoutUserInput[]
    createMany?: CourseReviewCreateManyUserInputEnvelope
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type LessonProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type CourseReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput> | CourseReviewCreateWithoutUserInput[] | CourseReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutUserInput | CourseReviewCreateOrConnectWithoutUserInput[]
    createMany?: CourseReviewCreateManyUserInputEnvelope
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSkillLevelFieldUpdateOperationsInput = {
    set?: $Enums.SkillLevel
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CourseUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type LessonProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutUserInput | LessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutUserInput | LessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutUserInput | LessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type CourseReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput> | CourseReviewCreateWithoutUserInput[] | CourseReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutUserInput | CourseReviewCreateOrConnectWithoutUserInput[]
    upsert?: CourseReviewUpsertWithWhereUniqueWithoutUserInput | CourseReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseReviewCreateManyUserInputEnvelope
    set?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    disconnect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    delete?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    update?: CourseReviewUpdateWithWhereUniqueWithoutUserInput | CourseReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseReviewUpdateManyWithWhereWithoutUserInput | CourseReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type LessonProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutUserInput | LessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutUserInput | LessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutUserInput | LessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type CourseReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput> | CourseReviewCreateWithoutUserInput[] | CourseReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutUserInput | CourseReviewCreateOrConnectWithoutUserInput[]
    upsert?: CourseReviewUpsertWithWhereUniqueWithoutUserInput | CourseReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseReviewCreateManyUserInputEnvelope
    set?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    disconnect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    delete?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    update?: CourseReviewUpdateWithWhereUniqueWithoutUserInput | CourseReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseReviewUpdateManyWithWhereWithoutUserInput | CourseReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoryInput | CourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoryInput | CourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoryInput | CourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoryInput | CourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoryInput | CourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoryInput | CourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutCoursesInput = {
    create?: XOR<ProfileCreateWithoutCoursesInput, ProfileUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCoursesInput
    connect?: ProfileWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCoursesInput
    connect?: CategoryWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCourseInput = {
    create?: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput> | PaymentCreateWithoutCourseInput[] | PaymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCourseInput | PaymentCreateOrConnectWithoutCourseInput[]
    createMany?: PaymentCreateManyCourseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CourseReviewCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput> | CourseReviewCreateWithoutCourseInput[] | CourseReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutCourseInput | CourseReviewCreateOrConnectWithoutCourseInput[]
    createMany?: CourseReviewCreateManyCourseInputEnvelope
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput> | PaymentCreateWithoutCourseInput[] | PaymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCourseInput | PaymentCreateOrConnectWithoutCourseInput[]
    createMany?: PaymentCreateManyCourseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CourseReviewUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput> | CourseReviewCreateWithoutCourseInput[] | CourseReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutCourseInput | CourseReviewCreateOrConnectWithoutCourseInput[]
    createMany?: CourseReviewCreateManyCourseInputEnvelope
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProfileUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<ProfileCreateWithoutCoursesInput, ProfileUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCoursesInput
    upsert?: ProfileUpsertWithoutCoursesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCoursesInput, ProfileUpdateWithoutCoursesInput>, ProfileUncheckedUpdateWithoutCoursesInput>
  }

  export type CategoryUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCoursesInput
    upsert?: CategoryUpsertWithoutCoursesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCoursesInput, CategoryUpdateWithoutCoursesInput>, CategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type LessonUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput> | PaymentCreateWithoutCourseInput[] | PaymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCourseInput | PaymentCreateOrConnectWithoutCourseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCourseInput | PaymentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PaymentCreateManyCourseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCourseInput | PaymentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCourseInput | PaymentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CourseReviewUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput> | CourseReviewCreateWithoutCourseInput[] | CourseReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutCourseInput | CourseReviewCreateOrConnectWithoutCourseInput[]
    upsert?: CourseReviewUpsertWithWhereUniqueWithoutCourseInput | CourseReviewUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseReviewCreateManyCourseInputEnvelope
    set?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    disconnect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    delete?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    update?: CourseReviewUpdateWithWhereUniqueWithoutCourseInput | CourseReviewUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseReviewUpdateManyWithWhereWithoutCourseInput | CourseReviewUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LessonUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput> | PaymentCreateWithoutCourseInput[] | PaymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCourseInput | PaymentCreateOrConnectWithoutCourseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCourseInput | PaymentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PaymentCreateManyCourseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCourseInput | PaymentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCourseInput | PaymentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CourseReviewUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput> | CourseReviewCreateWithoutCourseInput[] | CourseReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutCourseInput | CourseReviewCreateOrConnectWithoutCourseInput[]
    upsert?: CourseReviewUpsertWithWhereUniqueWithoutCourseInput | CourseReviewUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseReviewCreateManyCourseInputEnvelope
    set?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    disconnect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    delete?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    update?: CourseReviewUpdateWithWhereUniqueWithoutCourseInput | CourseReviewUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseReviewUpdateManyWithWhereWithoutCourseInput | CourseReviewUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutLessonsInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    connect?: CourseWhereUniqueInput
  }

  export type LessonProgressCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type LessonProgressUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    upsert?: CourseUpsertWithoutLessonsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutLessonsInput, CourseUpdateWithoutLessonsInput>, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type LessonProgressUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutLessonInput | LessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutLessonInput | LessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutLessonInput | LessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type LessonProgressUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutLessonInput | LessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutLessonInput | LessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutLessonInput | LessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<ProfileCreateWithoutEnrollmentsInput, ProfileUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutEnrollmentsInput
    connect?: ProfileWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<PaymentCreateWithoutEnrollmentsInput, PaymentUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutEnrollmentsInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumEnrollmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EnrollmentStatus
  }

  export type ProfileUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<ProfileCreateWithoutEnrollmentsInput, ProfileUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutEnrollmentsInput
    upsert?: ProfileUpsertWithoutEnrollmentsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutEnrollmentsInput, ProfileUpdateWithoutEnrollmentsInput>, ProfileUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseUpsertWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentsInput, CourseUpdateWithoutEnrollmentsInput>, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type PaymentUpdateOneWithoutEnrollmentsNestedInput = {
    create?: XOR<PaymentCreateWithoutEnrollmentsInput, PaymentUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutEnrollmentsInput
    upsert?: PaymentUpsertWithoutEnrollmentsInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutEnrollmentsInput, PaymentUpdateWithoutEnrollmentsInput>, PaymentUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ProfileCreateNestedOneWithoutProgressInput = {
    create?: XOR<ProfileCreateWithoutProgressInput, ProfileUncheckedCreateWithoutProgressInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutProgressInput
    connect?: ProfileWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutProgressInput = {
    create?: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutProgressInput
    connect?: LessonWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<ProfileCreateWithoutProgressInput, ProfileUncheckedCreateWithoutProgressInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutProgressInput
    upsert?: ProfileUpsertWithoutProgressInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutProgressInput, ProfileUpdateWithoutProgressInput>, ProfileUncheckedUpdateWithoutProgressInput>
  }

  export type LessonUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutProgressInput
    upsert?: LessonUpsertWithoutProgressInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutProgressInput, LessonUpdateWithoutProgressInput>, LessonUncheckedUpdateWithoutProgressInput>
  }

  export type ProfileCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ProfileCreateWithoutPaymentsInput, ProfileUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPaymentsInput
    connect?: ProfileWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CourseCreateWithoutPaymentsInput, CourseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPaymentsInput
    connect?: CourseWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutPaymentInput = {
    create?: XOR<EnrollmentCreateWithoutPaymentInput, EnrollmentUncheckedCreateWithoutPaymentInput> | EnrollmentCreateWithoutPaymentInput[] | EnrollmentUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPaymentInput | EnrollmentCreateOrConnectWithoutPaymentInput[]
    createMany?: EnrollmentCreateManyPaymentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<EnrollmentCreateWithoutPaymentInput, EnrollmentUncheckedCreateWithoutPaymentInput> | EnrollmentCreateWithoutPaymentInput[] | EnrollmentUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPaymentInput | EnrollmentCreateOrConnectWithoutPaymentInput[]
    createMany?: EnrollmentCreateManyPaymentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type ProfileUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ProfileCreateWithoutPaymentsInput, ProfileUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPaymentsInput
    upsert?: ProfileUpsertWithoutPaymentsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPaymentsInput, ProfileUpdateWithoutPaymentsInput>, ProfileUncheckedUpdateWithoutPaymentsInput>
  }

  export type CourseUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<CourseCreateWithoutPaymentsInput, CourseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPaymentsInput
    upsert?: CourseUpsertWithoutPaymentsInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPaymentsInput, CourseUpdateWithoutPaymentsInput>, CourseUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionUpsertWithoutPaymentsInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutPaymentsInput, SubscriptionUpdateWithoutPaymentsInput>, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type EnrollmentUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutPaymentInput, EnrollmentUncheckedCreateWithoutPaymentInput> | EnrollmentCreateWithoutPaymentInput[] | EnrollmentUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPaymentInput | EnrollmentCreateOrConnectWithoutPaymentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutPaymentInput | EnrollmentUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: EnrollmentCreateManyPaymentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutPaymentInput | EnrollmentUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutPaymentInput | EnrollmentUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutPaymentInput, EnrollmentUncheckedCreateWithoutPaymentInput> | EnrollmentCreateWithoutPaymentInput[] | EnrollmentUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPaymentInput | EnrollmentCreateOrConnectWithoutPaymentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutPaymentInput | EnrollmentUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: EnrollmentCreateManyPaymentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutPaymentInput | EnrollmentUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutPaymentInput | EnrollmentUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<ProfileCreateWithoutSubscriptionsInput, ProfileUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSubscriptionsInput
    connect?: ProfileWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumSubscriptionPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlanType
  }

  export type EnumSubscriptionTierFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionTier
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type ProfileUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<ProfileCreateWithoutSubscriptionsInput, ProfileUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSubscriptionsInput
    upsert?: ProfileUpsertWithoutSubscriptionsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutSubscriptionsInput, ProfileUpdateWithoutSubscriptionsInput>, ProfileUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PaymentUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProfileCreateWithoutReviewsInput, ProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutReviewsInput
    connect?: ProfileWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutReviewsInput = {
    create?: XOR<CourseCreateWithoutReviewsInput, CourseUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutReviewsInput
    connect?: CourseWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProfileCreateWithoutReviewsInput, ProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutReviewsInput
    upsert?: ProfileUpsertWithoutReviewsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutReviewsInput, ProfileUpdateWithoutReviewsInput>, ProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type CourseUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<CourseCreateWithoutReviewsInput, CourseUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutReviewsInput
    upsert?: CourseUpsertWithoutReviewsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutReviewsInput, CourseUpdateWithoutReviewsInput>, CourseUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[]
    notIn?: $Enums.SkillLevel[]
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[]
    notIn?: $Enums.SkillLevel[]
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[]
    notIn?: $Enums.EnrollmentStatus[]
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[]
    notIn?: $Enums.EnrollmentStatus[]
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlanType | EnumSubscriptionPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlanType[]
    notIn?: $Enums.SubscriptionPlanType[]
    not?: NestedEnumSubscriptionPlanTypeFilter<$PrismaModel> | $Enums.SubscriptionPlanType
  }

  export type NestedEnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[]
    notIn?: $Enums.SubscriptionTier[]
    not?: NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlanType | EnumSubscriptionPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlanType[]
    notIn?: $Enums.SubscriptionPlanType[]
    not?: NestedEnumSubscriptionPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanTypeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[]
    notIn?: $Enums.SubscriptionTier[]
    not?: NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTierFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTierFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type CourseCreateWithoutInstructorInput = {
    id?: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    category?: CategoryCreateNestedOneWithoutCoursesInput
    lessons?: LessonCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    payments?: PaymentCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutInstructorInput = {
    id?: string
    categoryId?: number | null
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseCreateManyInstructorInputEnvelope = {
    data: CourseCreateManyInstructorInput | CourseCreateManyInstructorInput[]
  }

  export type EnrollmentCreateWithoutUserInput = {
    id?: string
    source?: string
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutEnrollmentsInput
    payment?: PaymentCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    source?: string
    paymentId?: string | null
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
  }

  export type LessonProgressCreateWithoutUserInput = {
    id?: string
    isCompleted?: boolean
    watchedSec?: number
    lastPosition?: number
    completedAt?: Date | string | null
    updatedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutProgressInput
  }

  export type LessonProgressUncheckedCreateWithoutUserInput = {
    id?: string
    lessonId: string
    isCompleted?: boolean
    watchedSec?: number
    lastPosition?: number
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type LessonProgressCreateOrConnectWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    create: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput>
  }

  export type LessonProgressCreateManyUserInputEnvelope = {
    data: LessonProgressCreateManyUserInput | LessonProgressCreateManyUserInput[]
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course?: CourseCreateNestedOneWithoutPaymentsInput
    subscription?: SubscriptionCreateNestedOneWithoutPaymentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    courseId?: string | null
    subscriptionId?: string | null
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    planType: $Enums.SubscriptionPlanType
    tier: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    tossBillingKey?: string | null
    tossCustomerKey?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    planType: $Enums.SubscriptionPlanType
    tier: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    tossBillingKey?: string | null
    tossCustomerKey?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
  }

  export type CourseReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    course: CourseCreateNestedOneWithoutReviewsInput
  }

  export type CourseReviewUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CourseReviewCreateOrConnectWithoutUserInput = {
    where: CourseReviewWhereUniqueInput
    create: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput>
  }

  export type CourseReviewCreateManyUserInputEnvelope = {
    data: CourseReviewCreateManyUserInput | CourseReviewCreateManyUserInput[]
  }

  export type CourseUpsertWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
  }

  export type CourseUpdateManyWithWhereWithoutInstructorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutInstructorInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    instructorId?: StringFilter<"Course"> | string
    categoryId?: IntNullableFilter<"Course"> | number | null
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    thumbnailUrl?: StringNullableFilter<"Course"> | string | null
    skillLevel?: EnumSkillLevelFilter<"Course"> | $Enums.SkillLevel
    price?: IntFilter<"Course"> | number
    isPublished?: BoolFilter<"Course"> | boolean
    publishedAt?: DateTimeNullableFilter<"Course"> | Date | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Course"> | Date | string | null
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    source?: StringFilter<"Enrollment"> | string
    paymentId?: StringNullableFilter<"Enrollment"> | string | null
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
  }

  export type LessonProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    update: XOR<LessonProgressUpdateWithoutUserInput, LessonProgressUncheckedUpdateWithoutUserInput>
    create: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput>
  }

  export type LessonProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    data: XOR<LessonProgressUpdateWithoutUserInput, LessonProgressUncheckedUpdateWithoutUserInput>
  }

  export type LessonProgressUpdateManyWithWhereWithoutUserInput = {
    where: LessonProgressScalarWhereInput
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type LessonProgressScalarWhereInput = {
    AND?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
    OR?: LessonProgressScalarWhereInput[]
    NOT?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
    id?: StringFilter<"LessonProgress"> | string
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    isCompleted?: BoolFilter<"LessonProgress"> | boolean
    watchedSec?: IntFilter<"LessonProgress"> | number
    lastPosition?: IntFilter<"LessonProgress"> | number
    completedAt?: DateTimeNullableFilter<"LessonProgress"> | Date | string | null
    updatedAt?: DateTimeFilter<"LessonProgress"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    courseId?: StringNullableFilter<"Payment"> | string | null
    subscriptionId?: StringNullableFilter<"Payment"> | string | null
    paymentType?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    tossPaymentKey?: StringNullableFilter<"Payment"> | string | null
    tossOrderId?: StringNullableFilter<"Payment"> | string | null
    tossEventId?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    planType?: EnumSubscriptionPlanTypeFilter<"Subscription"> | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFilter<"Subscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    tossBillingKey?: StringNullableFilter<"Subscription"> | string | null
    tossCustomerKey?: StringNullableFilter<"Subscription"> | string | null
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
  }

  export type CourseReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseReviewWhereUniqueInput
    update: XOR<CourseReviewUpdateWithoutUserInput, CourseReviewUncheckedUpdateWithoutUserInput>
    create: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput>
  }

  export type CourseReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseReviewWhereUniqueInput
    data: XOR<CourseReviewUpdateWithoutUserInput, CourseReviewUncheckedUpdateWithoutUserInput>
  }

  export type CourseReviewUpdateManyWithWhereWithoutUserInput = {
    where: CourseReviewScalarWhereInput
    data: XOR<CourseReviewUpdateManyMutationInput, CourseReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseReviewScalarWhereInput = {
    AND?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
    OR?: CourseReviewScalarWhereInput[]
    NOT?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
    id?: StringFilter<"CourseReview"> | string
    userId?: StringFilter<"CourseReview"> | string
    courseId?: StringFilter<"CourseReview"> | string
    rating?: IntFilter<"CourseReview"> | number
    comment?: StringNullableFilter<"CourseReview"> | string | null
    createdAt?: DateTimeFilter<"CourseReview"> | Date | string
    updatedAt?: DateTimeFilter<"CourseReview"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CourseReview"> | Date | string | null
  }

  export type CourseCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    instructor: ProfileCreateNestedOneWithoutCoursesInput
    lessons?: LessonCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    payments?: PaymentCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCategoryInput = {
    id?: string
    instructorId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput>
  }

  export type CourseCreateManyCategoryInputEnvelope = {
    data: CourseCreateManyCategoryInput | CourseCreateManyCategoryInput[]
  }

  export type CourseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCategoryInput, CourseUncheckedUpdateWithoutCategoryInput>
    create: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCategoryInput, CourseUncheckedUpdateWithoutCategoryInput>
  }

  export type CourseUpdateManyWithWhereWithoutCategoryInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProfileCreateWithoutCoursesInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    reviews?: CourseReviewCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutCoursesInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutCoursesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCoursesInput, ProfileUncheckedCreateWithoutCoursesInput>
  }

  export type CategoryCreateWithoutCoursesInput = {
    name: string
    slug: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutCoursesInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutCoursesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput>
  }

  export type LessonCreateWithoutCourseInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    streamId?: string | null
    hlsUrl?: string | null
    durationSec?: number | null
    thumbnailUrl?: string | null
    sortOrder?: number
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    progress?: LessonProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    streamId?: string | null
    hlsUrl?: string | null
    durationSec?: number | null
    thumbnailUrl?: string | null
    sortOrder?: number
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    progress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCourseInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonCreateManyCourseInputEnvelope = {
    data: LessonCreateManyCourseInput | LessonCreateManyCourseInput[]
  }

  export type EnrollmentCreateWithoutCourseInput = {
    id?: string
    source?: string
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutEnrollmentsInput
    payment?: PaymentCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    source?: string
    paymentId?: string | null
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
  }

  export type PaymentCreateWithoutCourseInput = {
    id?: string
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutPaymentsInput
    subscription?: SubscriptionCreateNestedOneWithoutPaymentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    subscriptionId?: string | null
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutCourseInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput>
  }

  export type PaymentCreateManyCourseInputEnvelope = {
    data: PaymentCreateManyCourseInput | PaymentCreateManyCourseInput[]
  }

  export type CourseReviewCreateWithoutCourseInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: ProfileCreateNestedOneWithoutReviewsInput
  }

  export type CourseReviewUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CourseReviewCreateOrConnectWithoutCourseInput = {
    where: CourseReviewWhereUniqueInput
    create: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput>
  }

  export type CourseReviewCreateManyCourseInputEnvelope = {
    data: CourseReviewCreateManyCourseInput | CourseReviewCreateManyCourseInput[]
  }

  export type ProfileUpsertWithoutCoursesInput = {
    update: XOR<ProfileUpdateWithoutCoursesInput, ProfileUncheckedUpdateWithoutCoursesInput>
    create: XOR<ProfileCreateWithoutCoursesInput, ProfileUncheckedCreateWithoutCoursesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCoursesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCoursesInput, ProfileUncheckedUpdateWithoutCoursesInput>
  }

  export type ProfileUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutCoursesInput = {
    update: XOR<CategoryUpdateWithoutCoursesInput, CategoryUncheckedUpdateWithoutCoursesInput>
    create: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCoursesInput, CategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type CategoryUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUpsertWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
  }

  export type LessonUpdateManyWithWhereWithoutCourseInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutCourseInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    courseId?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    slug?: StringFilter<"Lesson"> | string
    description?: StringNullableFilter<"Lesson"> | string | null
    streamId?: StringNullableFilter<"Lesson"> | string | null
    hlsUrl?: StringNullableFilter<"Lesson"> | string | null
    durationSec?: IntNullableFilter<"Lesson"> | number | null
    thumbnailUrl?: StringNullableFilter<"Lesson"> | string | null
    sortOrder?: IntFilter<"Lesson"> | number
    isFreePreview?: BoolFilter<"Lesson"> | boolean
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Lesson"> | Date | string | null
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutCourseInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCourseInput, PaymentUncheckedUpdateWithoutCourseInput>
    create: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCourseInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCourseInput, PaymentUncheckedUpdateWithoutCourseInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCourseInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseReviewUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseReviewWhereUniqueInput
    update: XOR<CourseReviewUpdateWithoutCourseInput, CourseReviewUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput>
  }

  export type CourseReviewUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseReviewWhereUniqueInput
    data: XOR<CourseReviewUpdateWithoutCourseInput, CourseReviewUncheckedUpdateWithoutCourseInput>
  }

  export type CourseReviewUpdateManyWithWhereWithoutCourseInput = {
    where: CourseReviewScalarWhereInput
    data: XOR<CourseReviewUpdateManyMutationInput, CourseReviewUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutLessonsInput = {
    id?: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    instructor: ProfileCreateNestedOneWithoutCoursesInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    payments?: PaymentCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutLessonsInput = {
    id?: string
    instructorId: string
    categoryId?: number | null
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutLessonsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
  }

  export type LessonProgressCreateWithoutLessonInput = {
    id?: string
    isCompleted?: boolean
    watchedSec?: number
    lastPosition?: number
    completedAt?: Date | string | null
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutProgressInput
  }

  export type LessonProgressUncheckedCreateWithoutLessonInput = {
    id?: string
    userId: string
    isCompleted?: boolean
    watchedSec?: number
    lastPosition?: number
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type LessonProgressCreateOrConnectWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    create: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type LessonProgressCreateManyLessonInputEnvelope = {
    data: LessonProgressCreateManyLessonInput | LessonProgressCreateManyLessonInput[]
  }

  export type CourseUpsertWithoutLessonsInput = {
    update: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutLessonsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type CourseUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: ProfileUpdateOneRequiredWithoutCoursesNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    payments?: PaymentUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type LessonProgressUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    update: XOR<LessonProgressUpdateWithoutLessonInput, LessonProgressUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type LessonProgressUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    data: XOR<LessonProgressUpdateWithoutLessonInput, LessonProgressUncheckedUpdateWithoutLessonInput>
  }

  export type LessonProgressUpdateManyWithWhereWithoutLessonInput = {
    where: LessonProgressScalarWhereInput
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyWithoutLessonInput>
  }

  export type ProfileCreateWithoutEnrollmentsInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseCreateNestedManyWithoutInstructorInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    reviews?: CourseReviewCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutEnrollmentsInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutEnrollmentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutEnrollmentsInput, ProfileUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    instructor: ProfileCreateNestedOneWithoutCoursesInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    lessons?: LessonCreateNestedManyWithoutCourseInput
    payments?: PaymentCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    instructorId: string
    categoryId?: number | null
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type PaymentCreateWithoutEnrollmentsInput = {
    id?: string
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutPaymentsInput
    course?: CourseCreateNestedOneWithoutPaymentsInput
    subscription?: SubscriptionCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    userId: string
    courseId?: string | null
    subscriptionId?: string | null
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutEnrollmentsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutEnrollmentsInput, PaymentUncheckedCreateWithoutEnrollmentsInput>
  }

  export type ProfileUpsertWithoutEnrollmentsInput = {
    update: XOR<ProfileUpdateWithoutEnrollmentsInput, ProfileUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<ProfileCreateWithoutEnrollmentsInput, ProfileUncheckedCreateWithoutEnrollmentsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutEnrollmentsInput, ProfileUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ProfileUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: ProfileUpdateOneRequiredWithoutCoursesNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    payments?: PaymentUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type PaymentUpsertWithoutEnrollmentsInput = {
    update: XOR<PaymentUpdateWithoutEnrollmentsInput, PaymentUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<PaymentCreateWithoutEnrollmentsInput, PaymentUncheckedCreateWithoutEnrollmentsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutEnrollmentsInput, PaymentUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type PaymentUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutPaymentsNestedInput
    course?: CourseUpdateOneWithoutPaymentsNestedInput
    subscription?: SubscriptionUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateWithoutProgressInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseCreateNestedManyWithoutInstructorInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    reviews?: CourseReviewCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutProgressInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutProgressInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutProgressInput, ProfileUncheckedCreateWithoutProgressInput>
  }

  export type LessonCreateWithoutProgressInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    streamId?: string | null
    hlsUrl?: string | null
    durationSec?: number | null
    thumbnailUrl?: string | null
    sortOrder?: number
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    course: CourseCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutProgressInput = {
    id?: string
    courseId: string
    title: string
    slug: string
    description?: string | null
    streamId?: string | null
    hlsUrl?: string | null
    durationSec?: number | null
    thumbnailUrl?: string | null
    sortOrder?: number
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LessonCreateOrConnectWithoutProgressInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
  }

  export type ProfileUpsertWithoutProgressInput = {
    update: XOR<ProfileUpdateWithoutProgressInput, ProfileUncheckedUpdateWithoutProgressInput>
    create: XOR<ProfileCreateWithoutProgressInput, ProfileUncheckedCreateWithoutProgressInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutProgressInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutProgressInput, ProfileUncheckedUpdateWithoutProgressInput>
  }

  export type ProfileUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonUpsertWithoutProgressInput = {
    update: XOR<LessonUpdateWithoutProgressInput, LessonUncheckedUpdateWithoutProgressInput>
    create: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutProgressInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutProgressInput, LessonUncheckedUpdateWithoutProgressInput>
  }

  export type LessonUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    hlsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    hlsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileCreateWithoutPaymentsInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseCreateNestedManyWithoutInstructorInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    reviews?: CourseReviewCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutPaymentsInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutPaymentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPaymentsInput, ProfileUncheckedCreateWithoutPaymentsInput>
  }

  export type CourseCreateWithoutPaymentsInput = {
    id?: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    instructor: ProfileCreateNestedOneWithoutCoursesInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    lessons?: LessonCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPaymentsInput = {
    id?: string
    instructorId: string
    categoryId?: number | null
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPaymentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPaymentsInput, CourseUncheckedCreateWithoutPaymentsInput>
  }

  export type SubscriptionCreateWithoutPaymentsInput = {
    id?: string
    planType: $Enums.SubscriptionPlanType
    tier: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    tossBillingKey?: string | null
    tossCustomerKey?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: ProfileCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    planType: $Enums.SubscriptionPlanType
    tier: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    tossBillingKey?: string | null
    tossCustomerKey?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubscriptionCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
  }

  export type EnrollmentCreateWithoutPaymentInput = {
    id?: string
    source?: string
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    courseId: string
    source?: string
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutPaymentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutPaymentInput, EnrollmentUncheckedCreateWithoutPaymentInput>
  }

  export type EnrollmentCreateManyPaymentInputEnvelope = {
    data: EnrollmentCreateManyPaymentInput | EnrollmentCreateManyPaymentInput[]
  }

  export type ProfileUpsertWithoutPaymentsInput = {
    update: XOR<ProfileUpdateWithoutPaymentsInput, ProfileUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ProfileCreateWithoutPaymentsInput, ProfileUncheckedCreateWithoutPaymentsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPaymentsInput, ProfileUncheckedUpdateWithoutPaymentsInput>
  }

  export type ProfileUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutPaymentsInput = {
    update: XOR<CourseUpdateWithoutPaymentsInput, CourseUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CourseCreateWithoutPaymentsInput, CourseUncheckedCreateWithoutPaymentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPaymentsInput, CourseUncheckedUpdateWithoutPaymentsInput>
  }

  export type CourseUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: ProfileUpdateOneRequiredWithoutCoursesNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type SubscriptionUpsertWithoutPaymentsInput = {
    update: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumSubscriptionPlanTypeFieldUpdateOperationsInput | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    tossBillingKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossCustomerKey?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: ProfileUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planType?: EnumSubscriptionPlanTypeFieldUpdateOperationsInput | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    tossBillingKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossCustomerKey?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutPaymentInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutPaymentInput, EnrollmentUncheckedUpdateWithoutPaymentInput>
    create: XOR<EnrollmentCreateWithoutPaymentInput, EnrollmentUncheckedCreateWithoutPaymentInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutPaymentInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutPaymentInput, EnrollmentUncheckedUpdateWithoutPaymentInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutPaymentInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutPaymentInput>
  }

  export type ProfileCreateWithoutSubscriptionsInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseCreateNestedManyWithoutInstructorInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    reviews?: CourseReviewCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutSubscriptionsInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    reviews?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutSubscriptionsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSubscriptionsInput, ProfileUncheckedCreateWithoutSubscriptionsInput>
  }

  export type PaymentCreateWithoutSubscriptionInput = {
    id?: string
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutPaymentsInput
    course?: CourseCreateNestedOneWithoutPaymentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    userId: string
    courseId?: string | null
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentCreateManySubscriptionInputEnvelope = {
    data: PaymentCreateManySubscriptionInput | PaymentCreateManySubscriptionInput[]
  }

  export type ProfileUpsertWithoutSubscriptionsInput = {
    update: XOR<ProfileUpdateWithoutSubscriptionsInput, ProfileUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<ProfileCreateWithoutSubscriptionsInput, ProfileUncheckedCreateWithoutSubscriptionsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutSubscriptionsInput, ProfileUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type ProfileUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type ProfileCreateWithoutReviewsInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseCreateNestedManyWithoutInstructorInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutReviewsInput = {
    id: string
    displayName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    skillLevel?: $Enums.SkillLevel
    role?: $Enums.Role
    joinDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutReviewsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutReviewsInput, ProfileUncheckedCreateWithoutReviewsInput>
  }

  export type CourseCreateWithoutReviewsInput = {
    id?: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    instructor: ProfileCreateNestedOneWithoutCoursesInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    lessons?: LessonCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    payments?: PaymentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutReviewsInput = {
    id?: string
    instructorId: string
    categoryId?: number | null
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutReviewsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutReviewsInput, CourseUncheckedCreateWithoutReviewsInput>
  }

  export type ProfileUpsertWithoutReviewsInput = {
    update: XOR<ProfileUpdateWithoutReviewsInput, ProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProfileCreateWithoutReviewsInput, ProfileUncheckedCreateWithoutReviewsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutReviewsInput, ProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type ProfileUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUpdateManyWithoutInstructorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutReviewsInput = {
    update: XOR<CourseUpdateWithoutReviewsInput, CourseUncheckedUpdateWithoutReviewsInput>
    create: XOR<CourseCreateWithoutReviewsInput, CourseUncheckedCreateWithoutReviewsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutReviewsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutReviewsInput, CourseUncheckedUpdateWithoutReviewsInput>
  }

  export type CourseUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: ProfileUpdateOneRequiredWithoutCoursesNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    payments?: PaymentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInstructorInput = {
    id?: string
    categoryId?: number | null
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EnrollmentCreateManyUserInput = {
    id?: string
    courseId: string
    source?: string
    paymentId?: string | null
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressCreateManyUserInput = {
    id?: string
    lessonId: string
    isCompleted?: boolean
    watchedSec?: number
    lastPosition?: number
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    courseId?: string | null
    subscriptionId?: string | null
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    planType: $Enums.SubscriptionPlanType
    tier: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    tossBillingKey?: string | null
    tossCustomerKey?: string | null
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CourseReviewCreateManyUserInput = {
    id?: string
    courseId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CourseUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    payments?: PaymentUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
    payment?: PaymentUpdateOneWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedSec?: IntFieldUpdateOperationsInput | number
    lastPosition?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedSec?: IntFieldUpdateOperationsInput | number
    lastPosition?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedSec?: IntFieldUpdateOperationsInput | number
    lastPosition?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneWithoutPaymentsNestedInput
    subscription?: SubscriptionUpdateOneWithoutPaymentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumSubscriptionPlanTypeFieldUpdateOperationsInput | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    tossBillingKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossCustomerKey?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumSubscriptionPlanTypeFieldUpdateOperationsInput | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    tossBillingKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossCustomerKey?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumSubscriptionPlanTypeFieldUpdateOperationsInput | $Enums.SubscriptionPlanType
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    tossBillingKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossCustomerKey?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type CourseReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseCreateManyCategoryInput = {
    id?: string
    instructorId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    skillLevel?: $Enums.SkillLevel
    price?: number
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CourseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instructor?: ProfileUpdateOneRequiredWithoutCoursesNestedInput
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    payments?: PaymentUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCourseNestedInput
    reviews?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    price?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LessonCreateManyCourseInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    streamId?: string | null
    hlsUrl?: string | null
    durationSec?: number | null
    thumbnailUrl?: string | null
    sortOrder?: number
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EnrollmentCreateManyCourseInput = {
    id?: string
    userId: string
    source?: string
    paymentId?: string | null
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyCourseInput = {
    id?: string
    userId: string
    subscriptionId?: string | null
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseReviewCreateManyCourseInput = {
    id?: string
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LessonUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    hlsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: LessonProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    hlsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: NullableStringFieldUpdateOperationsInput | string | null
    hlsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutEnrollmentsNestedInput
    payment?: PaymentUpdateOneWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutPaymentsNestedInput
    subscription?: SubscriptionUpdateOneWithoutPaymentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseReviewUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: ProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type CourseReviewUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseReviewUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LessonProgressCreateManyLessonInput = {
    id?: string
    userId: string
    isCompleted?: boolean
    watchedSec?: number
    lastPosition?: number
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type LessonProgressUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedSec?: IntFieldUpdateOperationsInput | number
    lastPosition?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedSec?: IntFieldUpdateOperationsInput | number
    lastPosition?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedSec?: IntFieldUpdateOperationsInput | number
    lastPosition?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyPaymentInput = {
    id?: string
    userId: string
    courseId: string
    source?: string
    status?: $Enums.EnrollmentStatus
    enrolledAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManySubscriptionInput = {
    id?: string
    userId: string
    courseId?: string | null
    paymentType: $Enums.PaymentType
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    tossPaymentKey?: string | null
    tossOrderId?: string | null
    tossEventId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutPaymentsNestedInput
    course?: CourseUpdateOneWithoutPaymentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}