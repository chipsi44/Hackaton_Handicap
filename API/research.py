import json

def place_research_result(data : dict) -> str:
    fileObject = open("own_data.json", "r")
    jsonContent = fileObject.read()
    fileObject.close()
    dummies_data = json.loads(jsonContent)
    result = ""
    
    for k, v in dummies_data.items():
        if v['Type'] == data['activity'] or v['subtype'] == data['activity']:
            result += result_html_build(k, v)
    return result

def result_html_build(formatted_addres : str , value : dict) -> str:
    result = f"""<section className="mb-5">
      <a
        href="#"
        class="ml-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="logo512.png"
          alt=""
        ></img>
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {formatted_addres}
          </h5>
          <p class="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div class="flex items-center mb-5">
            <p class="bg-green-100 text-darkgreen text-sm font-semibold inline-flex items-center p-1.5 rounded">
              {value['Global_handi_score']}
            </p>
            <p class="ml-2 font-medium text-gray-900">Excellent</p>
            <span class="w-1 h-1 mx-2 bg-gray-900 rounded-full"></span>
            <p class="text-sm font-medium text-gray-500">376 reviews</p>
            <a
              href="#"
              class="ml-auto text-sm font-medium text-darkgreen hover:underline"
            >
              Read all reviews
            </a>
          </div>
          <div class="gap-8 sm:grid sm:grid-cols-2">
            <div>
              <dl>
                <dt class="text-sm font-medium text-gray-500">Staff</dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 mr-2">
                    <div class="bg-darkgreen h-2.5 rounded w-[88%]"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500">8.8</span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500">Comfort</dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 mr-2">
                    <div class="bg-darkgreen h-2.5 rounded w-[89%]"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500">8.9</span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500">Free WiFi</dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 mr-2">
                    <div class="bg-darkgreen h-2.5 rounded w-[88%]"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500">8.8</span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500">Facilities</dt>
                <dd class="flex items-center">
                  <div class="w-full bg-gray-200 rounded h-2.5 mr-2">
                    <div class="bg-darkgreen h-2.5 rounded w-[54%]"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500">5.4</span>
                </dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt class="text-sm font-medium text-gray-500">
                  Value for money
                </dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 mr-2">
                    <div class="bg-darkgreen h-2.5 rounded w-[89%]"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500">8.9</span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500 ">Cleanliness</dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5  mr-2">
                    <div class="bg-darkgreen h-2.5 rounded  w-[70%]"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 ">7.0</span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500 ">Location</dt>
                <dd class="flex items-center">
                  <div class="w-full bg-gray-200 rounded h-2.5  mr-2">
                    <div class="bg-darkgreen h-2.5 rounded  w-[89%]"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 ">8.9</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </a>
    </section></br>"""
    return result