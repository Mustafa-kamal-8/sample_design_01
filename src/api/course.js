import Api from "@/src/services/Api"

export async function getCourses({ search }) {
    const response = await Api.get("/courses", {
        search: search,
    })

    return response
}

export async function uploadCourses(body) {
    console.log("here??")
    const response = await Api.post("/courses", {
        body,
    })
    console.log(response)
    return response
}