import axiosInstance from './axios';
import {ImageUri, Post} from '@/types/domain';

type ResponsePost = Post & {images: ImageUri[]};

type RequestCreatePost = Omit<Post, 'id'> & {imageUris: ImageUri[]};

const getPosts = async (page = 1): Promise<ResponsePost[]> => {
  const {data} = await axiosInstance.get(`/posts/my?page=${page}`);

  return data;
};

const createPost = async (body: RequestCreatePost): Promise<ResponsePost> => {
  const {data} = await axiosInstance.post('/posts', body);

  return data;
};

type ResponseSinglePost = ResponsePost & {isFavorite: boolean};

const getPost = async (id: number): Promise<ResponseSinglePost> => {
  const {data} = await axiosInstance.get(`/posts/${id}`);

  return data;
};

const deletePost = async (id: number): Promise<number> => {
  const {data} = await axiosInstance.delete(`/posts/${id}`);
  return data;
};

type RequestUpdatePost = {
  id: number;
  body: Omit<Post, 'id' | 'longitude' | 'latitude' | 'address'> & {
    imageUris: ImageUri[];
  };
};

const updatePost = async ({
  id,
  body,
}: RequestUpdatePost): Promise<ResponseSinglePost> => {
  const {data} = await axiosInstance.patch(`/posts/${id}`, body);
  return data;
};

const getFavoritePost = async (page = 1): Promise<ResponsePost[]> => {
  const {data} = await axiosInstance.get(`/favorites/my?page=${page}`);
  return data;
};

const updateFavoritePost = async (id: number): Promise<number> => {
  const {data} = await axiosInstance.post(`/favorites/${id}`);
  return data;
};

type CalenderPost = {
  id: number;
  title: string;
  address: string;
};

type ResponseCalenderPost = Record<number, CalenderPost[]>;

const getCalenderPosts = async (
  year: number,
  month: number,
): Promise<ResponseCalenderPost> => {
  const {data} = await axiosInstance.get(`/posts?year=${year}&month=${month}`);
  return data;
};

export {
  createPost,
  getPost,
  getPosts,
  deletePost,
  updatePost,
  getFavoritePost,
  updateFavoritePost,
  getCalenderPosts,
};
export type {
  ResponsePost,
  RequestCreatePost,
  ResponseSinglePost,
  ResponseCalenderPost,
  CalenderPost,
};
