(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{127:function(e,t,a){},139:function(e,t,a){},288:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(43),r=a.n(i),c=a(13),o=(a(139),a(140),a(141),a(163),a(4)),d=a(7),l=a(8),h=a(11),b=a(10),m=a(9),p=a(24),j=a(0),u=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleLogout=e.handleLogout.bind(Object(h.a)(e)),e}return Object(l.a)(a,[{key:"render",value:function(){var e;return e=this.props.user.isLoggedIn?Object(j.jsx)("button",{onClick:this.handleLogout,type:"submit",className:"nav-link active",children:"Logout"}):Object(j.jsx)(c.b,{to:"/admin/login",className:"nav-link active",children:"Login"}),Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-4",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"/",children:Object(j.jsx)("i",{id:"page-logo",className:"fas fa-utensils"})}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),Object(j.jsx)("ul",{className:"navbar-nav",children:Object(j.jsx)("li",{className:"nav-item",children:e})})]})]})})}},{key:"handleLogout",value:function(){this.props.dispatch({type:"logout-success"}),window.location.href="/admin/login"}}]),a}(n.Component),g=Object(p.b)((function(e){return{user:e}}))(u);a.e(3).then(a.t.bind(null,293,7));var O=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("aside",{className:"bd-sidebar"+this.props.x,children:Object(j.jsxs)("div",{className:"flex-shrink-0 p-3 bg-white",style:{width:280},children:[Object(j.jsx)("a",{href:"/admin/home",className:"d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom",children:Object(j.jsx)("span",{className:"fs-5 fw-semibold",children:"Admin Dashboard"})}),Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsxs)("li",{className:"mb-1",children:[Object(j.jsx)("button",{className:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse",id:"platforms-btn","data-bs-target":"#categories","aria-expanded":"false",children:"Categories"}),Object(j.jsx)("div",{className:"collapse",id:"categories",children:Object(j.jsxs)("ul",{className:"btn-toggle-nav list-unstyled fw-normal pb-1 small",children:[Object(j.jsx)("li",{children:Object(j.jsx)(c.b,{id:"show-platforms-link",to:"/admin/categories",className:"link-dark rounded",children:"Show categories"})}),Object(j.jsx)("li",{children:Object(j.jsx)(c.b,{id:"add-platform-link",to:"/admin/categories/create",className:"link-dark rounded",children:"Add category"})})]})})]}),Object(j.jsxs)("li",{className:"mb-1",children:[Object(j.jsx)("button",{className:"btn btn-toggle align-items-center rounded collapsed","data-bs-toggle":"collapse",id:"add-chapter-btn","data-bs-target":"#recipes","aria-expanded":"false",children:"Recipes"}),Object(j.jsx)("div",{className:"collapse",id:"recipes",children:Object(j.jsxs)("ul",{className:"btn-toggle-nav list-unstyled fw-normal pb-1 small",children:[Object(j.jsx)("li",{children:Object(j.jsx)(c.b,{id:"show-chapters-link",to:"/admin/recipes",className:"link-dark rounded",children:"Show recipes"})}),Object(j.jsx)("li",{children:Object(j.jsx)(c.b,{id:"add-chapters-link",to:"/admin/recipes/create",className:"link-dark rounded",children:"Add recipe"})})]})})]})]})]})})}}]),a}(n.Component),v=Object(o.h)(O),f="http://localhost:8080",x=a(12),y=a.n(x),C=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={recipeCategs:[]},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),y.a.delete(f+"/api/recipeCategories/"+e.target.id.value,{}).then((function(){t.componentDidMount()}))}},{key:"render",value:function(){var e=this,t=this.state.recipeCategs.map((function(t,a){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.name}),Object(j.jsx)("td",{children:t.color}),Object(j.jsxs)("td",{style:{maxWidth:"55px"},children:[Object(j.jsx)(c.b,{style:{marginRight:"5px"},className:"btn btn-primary mr-1",to:"/admin/categories/"+t.id+"/edit",children:"Edit"}),Object(j.jsxs)("form",{style:{display:"inline"},onSubmit:e.handleSubmit,children:[Object(j.jsx)("input",{type:"hidden",name:"id",value:t.id}),Object(j.jsx)("button",{className:"btn btn-danger",type:"submit",children:"Delete"})]})]})]},a)}));return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsx)("h1",{className:"page-title",children:"Recipe categories"}),Object(j.jsxs)("table",{className:"table table-bordered table-responsive",style:{maxWidth:"600px"},children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Name"}),Object(j.jsx)("td",{children:"Color"}),Object(j.jsx)("td",{style:{maxWidth:"30px"},children:"Action"})]})}),Object(j.jsx)("tbody",{children:t})]})]})})}},{key:"componentDidMount",value:function(){var e=this;document.title="Admin | Recipes",y.a.get(f+"/api/recipeCategories").then((function(t){e.setState({recipeCategs:t.data})})).catch((function(e){return console.error(e)}))}}]),a}(n.Component),N=Object(o.h)(C),S=a(28),w=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={name:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),y.a.post(f+"/api/recipeCategories",{name:this.state.name}).then((function(){t.props.history.push("/admin/categories")}))}},{key:"handleChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsx)("h1",{className:"page-title",children:"Add recipe category"}),Object(j.jsxs)("form",{className:"row g-3",id:"form",method:"post",onSubmit:this.handleSubmit,children:[Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("input",{type:"text",className:"form-control",name:"name",placeholder:"name",onChange:this.handleChange})}),Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})]})})}}]),a}(n.Component),k=Object(o.h)(w),A=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:["Not Found ",this.props.x]})}}]),a}(n.Component),P=A,D=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={name:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),y.a.patch(f+"/api/recipeCategories/",{id:this.props.match.params.id,name:this.state.name}).then((function(){t.props.history.push("/admin/categories")}))}},{key:"handleChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsx)("h1",{className:"page-title",children:"Edit recipe category"}),Object(j.jsxs)("form",{className:"row g-3",id:"form",method:"post",onSubmit:this.handleSubmit,children:[Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})}),Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})]})})}},{key:"componentDidMount",value:function(){var e=this;document.title="Editare re\u021bet\u0103 | Re\u021bete",y.a.get(f+"/api/recipeCategories/"+this.props.match.params.id).then((function(t){e.setState({name:t.data.name})})).catch((function(e){return console.error(e)}))}}]),a}(n.Component),E=Object(o.h)(D),I=a(57),L=a(29),R=(a(126),a(58)),M=a.n(R),T=(a(127),function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onEditorStateChange=function(e){n.setState({editorState:e,content:M()(Object(L.convertToRaw)(e.getCurrentContent()))})},n.state={categoryId:"",name:"",description:"",content:"",recipeCategs:[],photo:"",editorState:L.EditorState.createEmpty()},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.fileInput=s.a.createRef(),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("image",this.state.photo),a.append("recipe",JSON.stringify({name:this.state.name,content:this.state.content,description:this.state.description,category:{id:this.state.categoryId}})),fetch(f+"/api/recipes",{method:"POST",headers:{Authorization:localStorage.getItem("jwt")},body:a}).then((function(){t.props.history.push("/admin/recipes")})).catch((function(e){return console.error(e)}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;"photo"===n&&(a=t.files[0]),this.setState(Object(S.a)({},n,a))}},{key:"render",value:function(){var e=this.state.editorState;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsx)("h1",{className:"page-title",children:"Add recipe"}),Object(j.jsxs)("form",{id:"form-chapter",method:"POST",onSubmit:this.handleSubmit,children:["Category:"," ",Object(j.jsx)("select",{value:this.state.categoryId,className:"mb-4",name:"categoryId",onChange:this.handleChange,children:this.state.recipeCategs.map((function(e,t){return Object(j.jsx)("option",{value:e.id,children:e.name},t)}))}),Object(j.jsxs)("div",{className:"form-group mb-4",children:["Name:\xa0",Object(j.jsx)("input",{value:this.state.name,type:"text",name:"name",onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group mb-4",children:["Description:\xa0",Object(j.jsx)("input",{value:this.state.description,style:{width:"100%"},type:"text",name:"description",onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group mb-4",children:["Photo:\xa0",Object(j.jsx)("input",{type:"file",name:"photo",onChange:this.handleChange})]}),"Steps:",Object(j.jsx)("div",{id:"editor-wrapper",children:Object(j.jsx)(I.Editor,{value:this.state.content,editorState:e,wrapperClassName:"wrapper-draft",editorClassName:"editor-draft",toolbarClassName:"toolbar-draft",onEditorStateChange:this.onEditorStateChange})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})}},{key:"componentDidMount",value:function(){var e=this;document.title="Create recipe | Re\u021bete",y.a.get(f+"/api/recipeCategories").then((function(t){e.setState({recipeCategs:t.data,categoryId:t.data[0].id})})).catch((function(e){return console.error(e)}))}}]),a}(n.Component)),F=Object(o.h)(T),U=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={recipes:[]},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),y.a.delete(f+"/api/recipes/"+e.target.id.value).then((function(){t.componentDidMount()}))}},{key:"render",value:function(){var e=this,t=this.state.recipes.map((function(t,a){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.name}),Object(j.jsx)("td",{children:t.category.name}),Object(j.jsxs)("td",{children:[Object(j.jsx)(c.b,{style:{marginRight:"5px"},className:"btn btn-primary",to:"/admin/recipes/"+t.id+"/edit",children:"Edit"}),Object(j.jsxs)("form",{style:{display:"inline"},onSubmit:e.handleSubmit,children:[Object(j.jsx)("input",{type:"hidden",name:"id",value:t.id}),Object(j.jsx)("button",{className:"btn btn-danger",type:"submit",children:"Delete"})]})]})]},a)}));return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsx)("h1",{className:"page-title",children:"Recipes"}),Object(j.jsxs)("table",{className:"table table-bordered table-responsive",style:{maxWidth:"600px"},children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Name"}),Object(j.jsx)("td",{children:"Category"}),Object(j.jsx)("td",{children:"Action"})]})}),Object(j.jsx)("tbody",{children:t})]})]})})}},{key:"componentDidMount",value:function(){var e=this;document.title="Admin | Re\u021bete",y.a.get(f+"/api/recipes").then((function(t){e.setState({recipes:t.data})})).catch((function(e){return console.error(e)}))}}]),a}(n.Component),W=Object(o.h)(U),z=a(132),J=a.n(z),B=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onEditorStateChange=function(e){n.setState({editorState:e,content:M()(Object(L.convertToRaw)(e.getCurrentContent()))})},n.state={categoryId:0,content:"",name:"",description:"",recipeCategs:[],photo:"",editorState:L.EditorState.createEmpty(),recipe:{}},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.fileInput=s.a.createRef(),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("image",this.state.photo),a.append("recipe",JSON.stringify({id:this.state.recipe.id,name:this.state.name,content:this.state.content,description:this.state.description,category:{id:this.state.categoryId}})),fetch(f+"/api/recipes",{method:"PATCH",headers:{Authorization:localStorage.getItem("jwt")},body:a}).then((function(){t.props.history.push("/admin/recipes")})).catch((function(e){return console.error(e)}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;"photo"===n&&(a=t.files[0]),this.setState(Object(S.a)({},n,a))}},{key:"render",value:function(){var e=this.state.editorState;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsx)("h1",{className:"page-title",children:"Edit recipe"}),Object(j.jsxs)("form",{id:"form-chapter",method:"POST",onSubmit:this.handleSubmit,children:["Category:"," ",Object(j.jsx)("select",{className:"mb-4",name:"categoryId",onChange:this.handleChange,children:this.state.recipeCategs.map((function(e,t){return Object(j.jsx)("option",{value:e.id,children:e.name},t)}))}),Object(j.jsxs)("div",{className:"form-group mb-4",children:["Name:\xa0",Object(j.jsx)("input",{type:"text",value:this.state.name,name:"name",onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group mb-4",children:["Description:\xa0",Object(j.jsx)("input",{type:"text",value:this.state.description,name:"description",onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group mb-4",children:[this.state.recipe.id&&Object(j.jsx)("img",{src:f+"/uploads/recipe"+this.state.recipe.id+".jpg",alt:"img"}),"Photo:\xa0",Object(j.jsx)("input",{type:"file",name:"photo",onChange:this.handleChange})]}),Object(j.jsx)("div",{id:"editor-wrapper",children:Object(j.jsx)(I.Editor,{editorState:e,wrapperClassName:"wrapper-draft",editorClassName:"editor-draft",toolbarClassName:"toolbar-draft",onEditorStateChange:this.onEditorStateChange})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})}},{key:"componentDidMount",value:function(){var e=this;document.title="Create recipe | Recipes",y.a.get(f+"/api/recipeCategories/").then((function(t){e.setState({recipeCategs:t.data})})).catch((function(e){return console.error(e)})),y.a.get(f+"/api/recipes/"+this.props.match.params.id).then((function(t){e.setState({content:t.data.content,recipe:t.data,categoryId:t.data.category.id,name:t.data.name,description:t.data.description,editorState:L.EditorState.createWithContent(L.ContentState.createFromBlockArray(J()(t.data.content)))})})).catch((function(e){return console.error(e)}))}}]),a}(n.Component),H=Object(o.h)(B),q=a(23),G=(a(128),a(32)),K=a.n(G),Q=function(e){return function(t){return(a=e,y.a.post(f+"/api/login",a)).then((function(a){return t({type:"login-success",payload:Object(q.a)(Object(q.a)({},a.data),{},{password:e.password})}),a}));var a}},V=function(e){return function(t){return function(e){return y.a.post(f+"/api/users",e)}(e).then((function(a){return t(Q(e)),a}))}},X=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={displayName:"",username:"",password:"",confirmPassword:"",pendingApiCall:!1,errors:{},passwordRepeatConfirmed:!0},n.onChangeDisplayName=function(e){var t=e.target.value,a=Object(q.a)({},n.state.errors);delete a.displayName,n.setState({displayName:t,errors:a})},n.onChangeUsername=function(e){var t=e.target.value,a=Object(q.a)({},n.state.errors);delete a.username,n.setState({username:t,errors:a})},n.onChangePasswordRepeat=function(e){var t=e.target.value,a=n.state.password===t,s=Object(q.a)({},n.state.errors);s.confirmPassword=a?"":"Does not match the password",n.setState({confirmPassword:t,passwordRepeatConfirmed:a,errors:s})},n.onChangePassword=function(e){var t=e.target.value,a=n.state.confirmPassword===t,s=Object(q.a)({},n.state.errors);delete s.password,s.confirmPassword=a?"":"Does not match the password",n.setState({password:t,passwordRepeatConfirmed:a,errors:s})},n.onSubmit=n.onSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"onSubmit",value:function(){var e=this;this.setState({pendingApiCall:!0});var t={username:this.state.username,displayName:this.state.displayName,password:this.state.password};this.props.actions.register(t).then((function(t){e.setState({pendingApiCall:!1},(function(){e.props.history.push("/admin/home")}))})).catch((function(t){var a=t.response.data;e.setState({pendingApiCall:!1,errors:a})}))}},{key:"render",value:function(){var e=this.state.errors;return Object(j.jsx)("div",{className:"register",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(j.jsx)("h1",{id:"sign-up",className:"display-4 text-center",children:"Sign Up"}),Object(j.jsx)("p",{className:"lead text-center",children:"Create your Account"}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("input",{type:"text",className:K()("form-control form-control-lg",{"is-invalid":e.displayName}),placeholder:"Name",name:"displayName",value:this.state.displayName,onChange:this.onChangeDisplayName}),e.displayName&&Object(j.jsx)("div",{className:"invalid-feedback",children:e.displayName})]}),Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("input",{type:"email",className:K()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChangeUsername}),e.username&&Object(j.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("input",{type:"password",className:K()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChangePassword}),e.password&&Object(j.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("input",{type:"password",className:K()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChangePasswordRepeat}),e.confirmPassword&&Object(j.jsx)("div",{className:"invalid-feedback",children:e.confirmPassword})]}),Object(j.jsxs)("button",{type:"button",className:"btn btn-primary btn-block mt-3",id:"register-btn",onClick:this.onSubmit,disabled:this.state.pendingApiCall||!this.state.passwordRepeatConfirmed,children:[this.state.pendingApiCall&&Object(j.jsx)("div",{className:"spinner-border spinner-border-sm text-light spinner-border mr-sm-1",children:Object(j.jsx)("span",{className:"sr-only",children:"Loading..."})}),"Submit"]})]})]})})})})}},{key:"componentDidMount",value:function(){document.title="Sign Up | Retete"}}]),a}(n.Component);X.defaultProps={actions:{register:function(){return new Promise((function(e,t){e({})}))}},history:{push:function(){}}};var Y=Object(p.b)(null,(function(e){return{actions:{register:function(t){return e(V(t))}}}}))(Object(o.h)(X)),Z=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",pendingApiCall:!1,errors:{}},n.onChangeUsername=function(e){var t=e.target.value;n.setState({username:t,errors:{}})},n.onChangePassword=function(e){var t=e.target.value;n.setState({password:t,errors:{}})},n.onClickLogin=n.onClickLogin.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"onClickLogin",value:function(){var e=this;this.setState({pendingApiCall:!0});var t={username:this.state.username,password:this.state.password};this.props.actions.postLogin(t).then((function(t){e.setState({pendingApiCall:!1}),t.data&&t.data.token&&(localStorage.setItem("jwt",t.data.token),e.props.history.push("/admin/home"))})).catch((function(t){var a=t.response.data;e.setState({errors:a,pendingApiCall:!1})}))}},{key:"render",value:function(){var e=this.state.errors,t=!1;return""!==this.state.username&&""!==this.state.password||(t=!0),Object(j.jsx)("div",{className:"login",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(j.jsx)("h1",{className:"display-4 text-center",children:"Log In"}),Object(j.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("input",{type:"email",className:K()("form-control form-control-lg mb-3",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChangeUsername}),e.username&&Object(j.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("input",{type:"password",className:K()("form-control form-control-lg mb-3",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChangePassword}),e.password&&Object(j.jsx)("div",{className:"invalid-feedback",children:e.password})]}),e.apiError&&Object(j.jsx)("div",{className:"col-12 mb-3",children:Object(j.jsx)("div",{className:"alert alert-danger",children:e.apiError})}),Object(j.jsxs)("button",{onClick:this.onClickLogin,type:"button",id:"login-btn",className:"btn btn-primary btn-block",disabled:t||this.state.pendingApiCall,children:[this.state.pendingApiCall&&Object(j.jsx)("div",{className:"spinner-border spinner-border-sm text-light spinner-border mr-sm-1",children:Object(j.jsx)("span",{className:"sr-only",children:"Loading..."})}),"Submit"]})]})]})})})})}},{key:"componentDidMount",value:function(){document.title="Login | Retete"}}]),a}(n.Component);Z.defaultProps={actions:{postLogin:function(){return new Promise((function(e,t){e({})}))}},dispatch:function(){}};var $=Object(p.b)(null,(function(e){return{actions:{postLogin:function(t){return e(Q(t))}}}}))(Object(o.h)(Z)),_=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{id:"adminhome",children:Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)("h1",{className:"page-title",children:"Admin Home"})})})}},{key:"componentDidMount",value:function(){document.title="Admin | Home"}}]),a}(n.Component),ee=function(e){e?y.a.defaults.headers.common.Authorization=e:delete y.a.defaults.headers.common.Authorization},te=a(133),ae=localStorage.getItem("jwt");var ne=function(){var e=Object(p.d)();if(ae){ee(ae);var t=Object(te.a)(ae);e.dispatch({type:"login-success",payload:t});var a=Date.now()/1e3;t.exp<a&&(e.dispatch("logout"),window.location.href="/admin/login")}var n=Object(p.c)((function(e){return e.isLoggedIn})),s=Object(o.g)();return n?Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{}),"/admin/login"!==window.location.pathname&&Object(j.jsx)(v,{}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/admin/home",component:_}),Object(j.jsx)(o.b,{exact:!0,path:"/admin/register",component:_}),Object(j.jsx)(o.b,{exact:!0,path:"/admin/login",component:$}),Object(j.jsx)(o.b,{exact:!0,path:"/admin/categories",component:N}),Object(j.jsx)(o.b,{exact:!0,path:"/admin/categories/create",component:k}),Object(j.jsx)(o.b,{exact:!0,path:"/admin/categories/:id/edit",component:E}),Object(j.jsx)(o.b,{exact:!0,path:"/admin/recipes",component:W}),Object(j.jsx)(o.b,{exact:!0,path:"/admin/recipes/create",component:F}),Object(j.jsx)(o.b,{exact:!0,path:"/admin/recipes/:id/edit",component:H}),Object(j.jsx)(o.b,{path:"*",children:Object(j.jsx)(P,{})})]})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{}),"/admin/register"!==s.pathname&&Object(j.jsx)(o.a,{to:"/admin/login"}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/admin/login",children:Object(j.jsx)($,{})}),Object(j.jsx)(o.b,{exact:!0,path:"/admin/register",children:Object(j.jsx)(Y,{})})]})]})},se=(a(288),function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,294)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))}),ie=a(59),re={},ce=function(e){return!!e};function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;return"logout-success"===t.type?(localStorage.removeItem("jwt"),Object(q.a)({},re)):"login-success"===t.type?Object(q.a)(Object(q.a)({},t.payload),{},{validToken:ce(t.payload),isLoggedIn:!0}):e}var de=a(134),le=a.n(de),he=a(74),be=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=e?Object(ie.a)(he.a,le.a):Object(ie.a)(he.a);return Object(ie.b)(oe,t)},me=be();r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p.a,{store:me,children:Object(j.jsx)(c.a,{children:Object(j.jsx)(ne,{})})})}),document.getElementById("root")),se()}},[[290,1,2]]]);
//# sourceMappingURL=main.507d2fc3.chunk.js.map