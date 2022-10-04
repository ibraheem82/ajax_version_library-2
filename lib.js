/**
 * * [🚀Astro] Library
 * * Library for making [HTTP] request to the space and server.
 * 
 * 
 * 
 * @Version 2.0.0
 * @author Ibraheem Omikunle
 * @license AST
 * 
 * 
 **/

// class AstroHTTP {
    // ! making a http get request
//     get(url) {
//         fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));

//     }
// }


// ! Using [promise]
class AstroHTTP {
    // ! making a http [get] request
    // get(url) {
    //     return new Promise((resolve, reject) => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));
    //     });
    // }

    // ! making a http [post] request
    // post(url, data) {
    //     return new Promise((resolve, reject) => {
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type' : 'application/json'
    //         },
            // ! sending the data that is passed in
    //         body: JSON.stringify(data)
    //     })
    //     .then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));
    //     });
    // }






    // ! making a http [PUT] request
    // put(url, data) {
    //     return new Promise((resolve, reject) => {
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-type' : 'application/json'
    //         },
    //         // ! sending the data that is passed in
    //         body: JSON.stringify(data)
    //     })
    //     .then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));
    //     });
    // }

    // ! making a http [DELETE] request

    delete(url) {
        return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        // .then(() => resolve(data))
        .then(() => resolve('User Deleted...'))
        .catch(err => reject(err));
        });
    }


}