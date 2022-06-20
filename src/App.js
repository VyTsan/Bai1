import './App.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Section from './components/Section/Section';

function App() {
  return (
    <div className='App'>
      <h1>BÀI TẬP 1</h1>
      <hr/>
      <h2 className='h'>5 buttons</h2>
     <Button name='Save'/>
     <Button name='Cancel'/>
     <Button name='Renting'/>
     <Button name='Buy'/>
     <Button name='Set auction'/>
      <hr/>
     <h2 className='h'>5 titles</h2>
     <Title currency='VNĐ' country='Việt Nam'/>
     <Title currency='Đô la' country='Mỹ'/>
     <Title currency='Euro' country='Anh'/>
     <Title currency='Nhân dân tệ' country='Trung Quốc'/>
     <Title currency='Rúp' country='Nga'/>
    <hr/>

    <h2 className='h'>4 sections</h2>
    <Section 
      title='HTML'
      content='HTML là chữ viết tắt của Hypertext Markup Language. 
      Nó giúp người dùng tạo và cấu trúc các thành phần trong trang web hoặc ứng dụng, 
      phân chia các đoạn văn, heading, links, blockquotes. 
      HTML không phải là ngôn ngữ lập trình, 
      đồng nghĩa với việc nó không thể tạo ra các chức năng “động” được. 
      Nó chỉ giống như Microsoft Word, dùng để bố cục và định dạng trang web.'
      imgURL='https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg'
    />
    <Section 
      title='CSS'
      content='CSS là viết tắt của Cascading Style Sheets, 
      một ngôn ngữ thiết kế đơn giản, xử lý một phần giao diện của trang web. 
      CSS mô tả cách các phần tử HTML hiển thị trên màn hình và các phương tiện khác.
      Tương tự với HTML, CSS không phải là ngôn ngữ lập trình'
      imgURL='https://tmarketing.vn/wp-content/uploads/2021/09/css.jpeg'
    />
    <Section 
      title='JavaScript'
      content='JavaScript là ngôn ngữ lập trình web, 
      nó được tích hợp và nhúng vào HTML giúp website trở nên sống động hơn. 
      JavaScript đóng vai trò như là một phần của trang web, 
      thực thi cho phép Client-side script từ phía người dùng cũng như phía máy chủ 
      (Nodejs) tạo ra các trang web động.'
      imgURL='https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/8c4eed15a33744e996461692464ebc7f.jpg'
    />
    <Section 
      title='ReactJS'
      content='React Js là một thư viện javascript dùng để xây dựng UI 
      cho 2 nền tảng Web và Mobile. 
      Ở lĩnh vực Web, sử dụng React Js đem lại trải nghiệm tốt cho người dùng, 
      khả năng Hot Reload giúp lập trình nhanh hơn.
      Ở lĩnh vực mobile, phiên bản React Native là tương lai của lập trình di động.'
      imgURL='https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png'
    />
        
    </div>
  );
}

export default App;
