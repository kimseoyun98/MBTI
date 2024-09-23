import axios from "axios";

const API_URL = "https://snowy-ritzy-chameleon.glitch.me/testResults";

// 새로운 테스트 결과를 생성하는 함수
export const createTestResult = async (resultData, token) => {
  const response = await axios.post(API_URL, resultData);
  return response.data; // 생성된 결과 데이터 반환
};

// 특정 테스트 결과를 조회하는 함수
export const getTestResults = async (token) => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 특정 테스트 결과를 삭제하는 함수
export const deleteTestResult = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data; // 삭제된 결과에 대한 응답 데이터 반환
};

// 특정 테스트 결과의 가시성을 업데이트하는 함수
export const updateTestResultVisibility = async (id, visibility, token) => {
  const response = await axios.patch(`${API_URL}/${id}`, { visibility });
  return response.data; // 업데이트된 결과 데이터 반환
};
