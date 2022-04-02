import request from '@/utils/request'

/**
 * @function 获取组织架构数据
 */
export function getDepartments() {
  return request({
    url: '/company/department'
  })
}

/**
 * @function 删除组织架构的部门
 */
export function delDepartments(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'delete'
  })
}

/**
 * @function 新增部门
 */
export function addDepartments(data) {
  return request({
    url: `/company/department`,
    method: 'post',
    data
  })
}

/**
 * @function 获取某个部门的详情
 */
export function getDepartDetail(id) {
  return request({
    url: `/company/department/${id}`
  })
}

/**
 * @function 保存编辑的数据
 */
export function updateDepartments(data) {
  return request({
    url: `/company/department/${data.id}`,
    method: 'put',
    data
  })
}
