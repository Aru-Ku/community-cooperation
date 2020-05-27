## Community Cooperation

There is a growing trend in empowering groups to work together to address these issues, whether it be to advertise where materials are kept, provide collection assistance or other social services, such as voluntary delivery

During a crisis, Local food, medical equipment and other supplies have already been shortaged. Moreover, the recommended (or required) self-isolation and social distancing measures can compound the problem by preventing people from reaching locations with the best supply stocks easily.

### How can technology help?

Mobile, web, and cloud services enable rapid deployment of applications that can empower cooperation in the community. Watson Assistant is a service on IBM Cloud that allows you to build, train, and deploy conversational interactions into any application, device, or channel. Creating a chatbot using Watson Assistant can help you address the issues that your users can face while trying to gather the necessary information. Embedding location/routing services like these can enhance such applications, giving optimum guidance so that they are outside of their isolation location for the minimum amount of time.

### Getting Started

1. Clone the repositpory.
2. Replace HERE_API with your api in keys.js
3. Change SERVER_URL with your backend url in keys.js
4. npx react-native run-android OR yarn react-native run-android
5. npx react-native start OR yarn react-native start

### Goal

The goal is to provide a mobile application, along with server-side components, that serves as the basis for developers to build out a community cooperation application that addresses local needs for food, equipment, and resources. It would allow both "Suppliers" (such as a store or a community member who has produce they can sell or distribute) to make people aware of what they have; and consumers ("Recipients") to locate where these supplies are, and, if necessary, guide them to the appropriate locations to pick them up.

### Solving the problem

![Cooperation architecture diagram](https://github.com/Call-for-Code/Solution-Starter-Kit-Cooperation-2020/raw/master/images/architecture-diagram.png)

1. The Recipient user launches the mobile app and can access information across multiple services.
2. The Recipient user can ask questions to Watson Assistant and get answers on food/service availability questions.
3. The Supplier user can post the availability of resources they can provide, as well as locate the items they need.
4. The Recipient user can obtain geolocation data to plot routes to collect (or drop off) supplies using HERE Location Services.


### References

- [HERE API](https://developer.here.com/ref/IBM_starterkit_Covid?create=Freemium-Basic)
- [Watson Assitant](https://www.ibm.com/cloud/watson-assistant/)
- [React Native](https://reactnative.dev/)