import axios from "axios"

const API_URL = 'http://localhost:4000'

export const postExams = (body) => {
  return axios.post(`${API_URL}/exams`, body)
}

export const getExamsByTeacherId = (id) => {
  return axios.get(`${API_URL}/exams/teacher/${id}`)
}

export const getExamsBySubjectId = (id) => {
  return axios.get(`${API_URL}/exams/subject/${id}`)
}

export const getSubjects = () => {
  return axios.get(`${API_URL}/subjects`)
}

export const getTeachersBySubjectId = (id) => {
  return axios.get(`${API_URL}/teachers/subject/${id}`)
}
