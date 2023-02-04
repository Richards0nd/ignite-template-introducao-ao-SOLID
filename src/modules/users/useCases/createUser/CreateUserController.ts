import { Response, Request } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	handle(req: Request, res: Response): Response {
		const { name, email } = req.body
		try {
			const user = this.createUserUseCase.execute({ name, email })
			if (!user) {
				return res.status(400).json({ error: 'User not found' })
			}
			return res.status(201).json(user)
		} catch (error) {
			return res.status(400).json({ error: error.message })
		}
	}
}

export { CreateUserController }
