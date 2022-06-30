import axios from './axios';
import { Task } from '../interfaces/Task';
import { AxiosResponse } from 'axios';


export const getTasks = async (): Promise<AxiosResponse<Task[]>> =>
  await axios.get("/tasks");

export const getTask = async (id: number): Promise<AxiosResponse<Task>> =>
  await axios.get(`/tasks/${id}`);

  export const createTask = async (task: Task): Promise<AxiosResponse> =>
  await axios.post("/tasks", task);

  export const updateTask = async (
    id: number,
    newTask: Task
  ): Promise<AxiosResponse<Task>> => 
  await axios.put(`/tasks/${id}`, newTask);

  export const deleteTask = async (id: number): Promise<AxiosResponse> =>
  await axios.delete(`/tasks/${id}`);

