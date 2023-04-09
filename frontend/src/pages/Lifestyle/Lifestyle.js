import React from 'react'

const Lifestyle = () => {
  return (
    <div className="h-screen flex flex-col">

      {/* <Navbar2 /> */}
      <div>
        
        <div id="header" className=" bg-gradient-to-l from-blue-300 to-blue-700 mx-auto h-96  bg-no-repeat bg-cover" >
          <h3 className="text-left text-6xl ml-6 text-white bottom-6  pt-24 font-bold">Lifestyle</h3>
          <br />
          <p className="ml-6 text-2xl    text-left w-5/12 mt-4 font-serif">
            The key to a healthy and a fulfilling life is a good lifestyle. 
          </p>
          <p className="ml-6 text-2xl  text-left w-5/12 mt-4 font-serif">
Eat well, exercise regularly, sleep enough, stay hydrated, manage stress.</p>
        </div>
        <br />

      </div>
      <div id="image" class="h-screen flex flex-col">
  <div class="h-full w-full   px-2 mb-3 rounded-lg overflow-hidden bg-blue-300 shadow-md flex">
    <div class="h-full w-full rounded-md">
      <img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full w-full rounded-md"/>
    </div>
    <div class="w-1/2  font-serif pt-4 mx-2">
      <h2 class="text-xl  flex items-center  px- font-bold mb-2">Lifestyle Seminars</h2>
      <p class="text-gray-600  text-base">Attending a health seminar conducted by a doctor can be a great way to improve your health and wellbeing. Here are some reasons why:</p>

      <p class="text-gray-600  text-base">Firstly, a doctor has specialized knowledge and experience in the field of health and wellness. Attending a seminar conducted by a doctor means you'll be receiving expert advice and recommendations on how to lead a healthier lifestyle.</p>

      <p class="text-gray-600 text-base">Secondly, health seminars often provide new strategies and techniques for maintaining a healthy lifestyle. You may learn about new exercises or dietary habits that can help you improve your health and wellbeing.</p>

      
      <p class="text-gray-600 text-base">Moreover, doctors can provide personalized recommendations based on your individual health needs. This means you can get customized advice on how to improve your health based on your current health condition, lifestyle, and preferences.</p>
      <button class="bg-blue-500  flex items-center hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Learn More</button>
    </div>
  </div>
</div>

<div class="flex flex-wrap justify-center  mt-6 mx-1" id= "cards">
  <div class="w-full  mt-2 md:w-1/3 px-2 py-2 h-9">
    <div class="rounded-lg shadow-lg bg-white">
      <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="rounded-t-lg w-full"/>
      <div class="px-4 py-2">
        <h2 class="font-bold text-lg mb-2">Exercise</h2>
        <p class="text-gray-700 text-base mb-2 font-serif">Regular exercise promotes fitness, health, strength, energy, and endurance, improving overall vitality and wellness through movement and sweat.</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Join Meeting</button>
      </div>
    </div>
  </div>
  <div class="w-full mt-2  md:w-1/3 px-2 py-2">
    <div class="rounded-lg shadow-lg bg-white">
      <img src="https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="rounded-t-lg mt-2  w-full"/>
      <div class="px-4 py-2">
        <h2 class="font-bold text-lg mb-2">Yoga</h2>
        <p class="text-gray-700 text-base mb-2">Yoga provides a wide range of benefits, including improved flexibility, strength, balance, posture, breathing, relaxation, stress reduction, and overall physical and mental well-being.</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Join Meeting</button>
      </div>
    </div>
  </div>
  <div class="w-full mt-2 md:w-1/3 px-2 py-2">
    <div class="rounded-lg shadow-lg bg-white">
      <img src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="rounded-t-lg mt-2  w-full"/>
      <div class="px-4 py-2">
        <h2 class="font-bold text-lg mb-2">Meditation</h2>
        <p class="text-gray-700 text-base mb-2">Meditation improves mental and physical well-being by cultivating awareness and inner peace through focused practice.</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Join Meeting</button>
      </div>
    </div>
  </div>
  <div class="w-1/3 mt-2 px-2 py-2">
    <div class="rounded-lg shadow-lg bg-white">
      <img src="https://images.unsplash.com/photo-1550504630-cc20eca3b23e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRoZXJhcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="rounded-t-lg mt-2 w-full"/>
      <div class="px-4 py-2">
        <h2 class="font-bold text-lg mb-2">Therapy</h2>
        <p class="text-gray-700 text-base mb-2">Therapy is a treatment that helps individuals address emotional and psychological issues by exploring their thoughts in a supportive environment, leading to positive changes in relationships.</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Join Meeting</button>
      </div>
    </div>
  </div>
  <div class="w-full mt-2 md:w-1/3 px-2 py-2">
    <div class="rounded-lg shadow-lg bg-white">
      <img src="https://images.unsplash.com/photo-1550026593-f369f98df0af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="rounded-t-lg mt-2 w-full"/>
      <div class="px-4 py-2">
        <h2 class="font-bold text-lg mb-2">Dance therapy </h2>
        <p class="text-gray-700 text-base mb-2">Dance therapy is a psychotherapy that uses movement and dance to promote emotional, cognitive, and physical integration, leading to improved self-esteem, communication skills, and overall well-being.</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Join Meeting</button>
      </div>
    </div>
  </div>
  <div class="w-full mt-2 md:w-1/3 px-2 py-2">
    <div class="rounded-lg shadow-lg bg-white">
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="rounded-t-lg mt-2 w-full"/>
      <div class="px-4 py-2">
        <h2 class="font-bold text-lg mb-2">Healthy Food Recipies</h2>
        <p class="text-gray-700 text-base mb-2">Healthy food provides essential nutrients and energy for the body, supporting overall physical and mental health. </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Join Meeting</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};
export default Lifestyle;