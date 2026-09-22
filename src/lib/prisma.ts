// Resolve the generated client at runtime so this file remains type-safe even
// when the package's generated declarations do not expose `PrismaClient`.
const PrismaClient = (require('@prisma/client') as {
  PrismaClient: new () => import('@prisma/client').PrismaClient;
}).PrismaClient;

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  // Allow global `var` declarations
  // eslint-disable-next-line no-var
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;