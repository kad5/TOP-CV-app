# CV creator react app + backend api

This was my first react app, it is part of TOP assignments. I opted to add a backend to it since I had finished the node course.  

live preview here: https://cv-simple-react.netlify.app/
backend code here: https://github.com/kad5/TOP-CV-api

The app creates cv pages dynamically through 3 easy steps, choose a template, pick cv blocks (experience, education, etc) and fill them, download or save to your profile (if you want to make a profile).

I learned alot about react ecosysyem, hooks, state, etc. On thing i would change for later projects is to use axios for fetch. For this app i tried making my own fetch config fucntion to act as an interceptors, adding headers and calling refresh tokens. it is functional but the earlier versions produced soo many bugs. in the spirit of not reinventing the wheel i will use axios later, but this was a nice practice in coding in general. the react docs really help giving important advice. also react error messages are very informative. AI doesn't understand react it seems. the code is usually spagetti getting very complex very soon when easier solutions can be adopted. for example i tried to make my cv edited via editing the actual cv page (not filling fields in a form, but styled fields directly on the cv page - to help the user visualize the output better) this was my first react component, so i modled it after react docs, but ran into few issues with styling of inputs. so i asked the ai and it suggested editable spans, which was a mess. the code was 200+ lines for a simple component and 300 for its parent component (a list container). eventually i went through the docs again, started from scratch and produced the desired outcome with about 100 lines of code in total. some nice tutorials exist on youtube, particularly for auth and data fetching. 

## preview

![sh](https://github.com/user-attachments/assets/a3ddfd20-24ba-4894-90a6-1d699c875f47)
