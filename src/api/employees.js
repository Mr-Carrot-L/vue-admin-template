import request from '@/utils/request'

/**
 * @function 获取员工的简单列表
 */
export function getEmployeeSimple() {
  return request({
    url: `/sys/user/simple`
  })
}

/**
 * @function 获取员工综合列表
 */
export function getEmployeeList(params) {
  return request({
    url: `/sys/user`,
    params
  })
}

/**
 * @function 删除员工
 */
export function delEmployee(id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'delete'
  })
}

/**
 * @function 删除员工
 */
export function addEmployee(data) {
  return request({
    url: `/sys/user`,
    method: 'post',
    data
  })
}

/**
 * @function 导入员工数据
 */
export function importEmployee(data) {
  return request({
    url: `/sys/user/batch`,
    method: 'post',
    data
  })
}

/**
 * @function 保存员工基本信息
 */
export function saveUserDetailById(data) {
  return request({
    url: `/sys/user/${data.id}`,
    method: 'put',
    data
  })
}

/** *
 *  @function 读取用户详情的基础信息
 * **/
export function getPersonalDetail(id) {
  return request({
    url: `/employees/${id}/personalInfo`
  })
}

/** *
 *  @function 更新用户详情的基础信息
 * **/
export function updatePersonal(data) {
  return request({
    url: `/employees/${data.userId}/personalInfo`,
    method: 'put',
    data
  })
}

/** **
 *  @function 获取用户的岗位信息
 *
 * ****/
export function getJobDetail(id) {
  return request({
    url: `/employees/${id}/jobs`
  })
}

/**
 *  @function 保存岗位信息
 * ****/
export function updateJob(data) {
  return request({
    url: `/employees/${data.userId}/jobs`,
    method: 'put',
    data
  })
}

/** *
 * 给用户分配角色
 * ***/
export function assignRoles(data) {
  return request({
    url: '/sys/user/assignRoles',
    data,
    method: 'put'
  })
}
