import { Request, Response } from 'express'

import { ListAllUsersUseCase } from './ListAllUsersUseCase'

interface IRequest {
	user_id: string
}

class ListAllUsersController {
	constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

	handle(req: Request, res: Response): Response {
		let user_id = req.header('user_id')
		try {
			const listUsers = this.listAllUsersUseCase.execute({ user_id })
			return res.json(listUsers)
		} catch (error) {
			return res.status(400).json({ error: error.message })
		}
	}
}

export { ListAllUsersController }
