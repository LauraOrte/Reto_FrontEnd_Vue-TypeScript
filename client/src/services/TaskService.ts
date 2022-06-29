import axios from './axios';
import { Task } from '../interfaces/Task';
import { AxiosResponse } from 'axios';


export const getTasks = async (): Promise<AxiosResponse<Task[]>> =>
  await axios.get("/tasks");

export const getTask = async (id: string): Promise<AxiosResponse<Task>> =>
  await axios.get(`/tasks/${id}`);



//Para enviar al Backend
export const createTask = async (task: Task ) => 
await axios.post('/tasks', task);
