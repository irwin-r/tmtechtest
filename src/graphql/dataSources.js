import { JobService, SessionService, UserService } from '../services';

const jobService = new JobService();
const sessionService = new SessionService();
const userService = new UserService();

export default () => ({
	jobService,
	sessionService,
	userService,
});
