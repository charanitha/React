import React from 'react'


const Posts = ({posts,loading}) => {
  if (loading) {
    return <h3>Loading . . . </h3>;
  }

return(
          <div>
            
              <tr>
                <th className = "">Execution Time &nbsp;</th>
                <th className = "">Last Updated &nbsp;</th>
                <th className = "">Execution Type &nbsp;</th>
                <th className = "">Status &nbsp;</th>
              </tr>
            
            

            <tbody>{
              posts.map((post,index) => <tr key={post.id} align="start" >
                <td className ="">{post.city}</td>
                <td>{post.name}</td>
                <td>{post.type ==0 ? 'scheduled' : 'Manual'}</td>
                <td>{post.company}</td>
              </tr> )
            }
            </tbody>


                
            </div>
        )
    }
 
export default Posts;
  