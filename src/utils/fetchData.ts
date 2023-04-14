import axios from 'axios'
// @ts-expect-error no ts definite
import qs from 'qs'

const url = '/api/project'

// export const updateProject = async () => {

//   const data = {
//       "_id": 0,
//       "name": "string",
//       "status": "archived"
//   }

//   // const res = await axios.put(url, data)
//   const res = await axios({
//     method: 'put',
//     url,
//     data,
//   })

//   console.log(res);
// }

export const addProject = async () => {
  const data ={
    "city": "string",
    "country": "string",
    "district": "string",
    "latitude": 0,
    "longitude": 0,
    "name": "string",
    "province": "string"
  }

  // const res = await axios.post(url, data)
  const res = await axios({
    url,
    data,
    method: 'post',
  })
  console.log(res);
}

export const deleteProject = async () => {
  // const data = {_ids: [0]}
  // data._ids = qs.stringify(data._ids)

  // const config = {
  //   data: {
  //     _ids: [0]
  //   }
  // }
 
  // const res = await axios.delete(url, config)
  // https://blog.csdn.net/weixin_47000834/article/details/125935996
  const res = await axios({
    url,
    method: 'delete',
    data: {
      _ids: [0]
    }
  })
  console.log(res);
  
}

export const getSingleProject = async () => {
  const id = '8879480735006823'

  const res = await axios({
    url: url+'/'+id,
    method: 'get'
  })

  console.log(res);
}

export const getAllProjects = async () => {
  const payload = {
    page: 1,
    size: 100,
  }
  const url = '/api/projects'

  const res = await axios({
    url: url,
    method: 'get',
    params: payload,
  })
  console.log(res);
}

export const changeProjectsName = async () => {
  const url = '/api/projects/name'
  const data = {
    "infos": [
      {
        "_id": 0,
        "name": "string"
      }
    ]
  }

  const res = await axios.put(url, data)

  console.log(res);
}

export const changeProjectsStatus = async () => {
  const url = '/api/projects/status'
  const data = {
    "infos": [
      {
        "_id": 0,
        "status": "string"
      }
    ]
  }

  const res = await axios.put(url, data)

  console.log(res);
}

// export const getCityName = async (lng: number, lat: number): Promise<string> => {
//   const res = await axios({
//     url: `/api/address?longitude=${lng}&latitude=${lat}`,
//     method: 'get',
//   })

//   console.log(res)
// }