import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { userInteractionValidationSchema } from 'validationSchema/user-interactions';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.user_interaction
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getUserInteractionById();
    case 'PUT':
      return updateUserInteractionById();
    case 'DELETE':
      return deleteUserInteractionById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getUserInteractionById() {
    const data = await prisma.user_interaction.findFirst(convertQueryToPrismaUtil(req.query, 'user_interaction'));
    return res.status(200).json(data);
  }

  async function updateUserInteractionById() {
    await userInteractionValidationSchema.validate(req.body);
    const data = await prisma.user_interaction.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteUserInteractionById() {
    const data = await prisma.user_interaction.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
