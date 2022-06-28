import axios from './axios';
import { Task } from '../interfaces/Task';

//Para enviar al Backend
export const createTask = async (task: Task ) => 
await axios.post('/tasks', task);
