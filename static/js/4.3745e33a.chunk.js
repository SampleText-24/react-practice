(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{292:function(e,t,a){e.exports={ava:"ProfileInfo_ava__3Tmw6",contact:"ProfileInfo_contact__B27hz",text:"ProfileInfo_text__s6mgv"}},293:function(e,t,a){e.exports={post_block:"MyPosts_post_block__hYCcE"}},294:function(e,t,a){e.exports={post:"Post_post__39NcM"}},295:function(e,t,a){"use strict";a.r(t);var n=a(35),l=a(36),o=a(38),r=a(37),s=a(0),u=a.n(s),c=a(95),i=a(292),m=a.n(i),p=a(49),f=function(e){var t=Object(s.useState)(!1),a=Object(c.a)(t,2),n=a[0],l=a[1],o=Object(s.useState)(e.status),r=Object(c.a)(o,2),i=r[0],m=r[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return u.a.createElement(u.a.Fragment,null,!n&&u.a.createElement("div",null,u.a.createElement("b",null,"Status:")," ",u.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"Your status can be here!")),n&&u.a.createElement("div",null,u.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(i)},value:i})))},b=a(106),d=a.n(b),E=a(32),v=a(128),h=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit;return u.a.createElement("form",{onSubmit:t},u.a.createElement("div",null,u.a.createElement("button",null,"Save")),u.a.createElement("div",null,u.a.createElement("b",null,"Full name:")," ",Object(E.c)("Full name","fullName",E.a)),u.a.createElement("div",null,u.a.createElement("b",null,"Looking for a job:"),Object(E.c)("","lookingForAJob",E.a,"checkbox")),u.a.createElement("div",null,u.a.createElement("b",null,"My professional skills:"),Object(E.c)("My professional skills","lookingForAJobDescription",E.b)),u.a.createElement("div",null,u.a.createElement("b",null,"About me:")," ",Object(E.c)("About me","aboutMe",E.b)))})),g=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return u.a.createElement("div",null,a&&u.a.createElement("div",null,u.a.createElement("button",{onClick:n},"Edit")),u.a.createElement("div",null,u.a.createElement("b",null,"Full name:")," ",t.fullName),u.a.createElement("div",null,u.a.createElement("b",null,"Looking for a job:")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&u.a.createElement("div",null,u.a.createElement("b",null,"My professional skills:")," ",t.lookingForAJobDescription),u.a.createElement("div",null,u.a.createElement("b",null,"About me:")," ",t.aboutMe),u.a.createElement("div",null,u.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return u.a.createElement(P,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},P=function(e){var t=e.contactTitle,a=e.contactValue;return u.a.createElement("div",{className:m.a.contact},u.a.createElement("b",null,t,":")," ",a)},O=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,o=e.savePhoto,r=e.saveProfile,i=Object(s.useState)(!1),b=Object(c.a)(i,2),E=b[0],v=b[1];if(!t)return u.a.createElement(p.a,null);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("div",{className:m.a.ava},u.a.createElement("img",{src:t.photos.large||d.a}),l&&u.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),E?u.a.createElement(h,{initialValues:t,onSubmit:function(e){r(e),v(!1)}}):u.a.createElement(g,{profile:t,isOwner:l,goToEditMode:function(){v(!0)}}),u.a.createElement(f,{status:a,updateStatus:n}))))},k=a(94),j=a(40),S=a(293),y=a.n(S),_=a(294),w=a.n(_),A=function(e){return u.a.createElement("div",{className:w.a.post},u.a.createElement("img",{src:"https://e-cdns-images.dzcdn.net/images/artist/84ff06f377b881b355e0959f750f5a1b/500x500.jpg",alt:""}),e.message,u.a.createElement("div",null,u.a.createElement("span",null,"like "),e.likes))},F=a(88),I=a(57),M=Object(I.a)(10),x=Object(v.a)({form:"profileAddPostForm"})((function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",null,u.a.createElement(F.a,{name:"newPostElement",component:E.b,placeholder:"Your text here",validate:[I.b,M]})),u.a.createElement("div",null,u.a.createElement("button",null,"Add Post")))})),T=function(e){var t=Object(j.a)(e.posts).reverse().map((function(e){return u.a.createElement(A,{message:e.message,key:e.id,likes:e.likes})}));return u.a.createElement("div",{className:y.a.post_block},u.a.createElement("h3",null,"My post"),u.a.createElement(x,{onSubmit:function(t){e.addPost(t.newPostElement)}}),u.a.createElement("div",null,"new post"),t)},C=a(17),D=Object(C.b)((function(e){return{posts:e.ProfilePage.posts,newPostText:e.ProfilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(k.a)(t))}}}))(T),J=function(e){return u.a.createElement("div",null,u.a.createElement(O,{isOwner:!e.match.params.userId,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),u.a.createElement(D,null))},N=a(10),R=a(8),U=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"profileRefresh",value:function(){var e=this.props.match.params.userId;e||(e=this.props.loggedUserID)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.profileRefresh()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.profileRefresh()}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(J,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})))}}]),a}(u.a.Component);t.default=Object(R.d)(Object(C.b)((function(e){return{profile:e.ProfilePage.profile,status:e.ProfilePage.status,loggedUserID:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfile:k.c,getStatus:k.d,updateStatus:k.g,savePhoto:k.e,saveProfile:k.f}),N.f)(U)}}]);
//# sourceMappingURL=4.3745e33a.chunk.js.map