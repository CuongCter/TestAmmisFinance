# Lý thuyết 

## 1. React Components 

- Khái niệm: "Components" trong React được hiểu đơn giản là các khối được xây dựng UI độc lập để có thể giúp chúng ta có thể tái sử dụng và chính là nền tảng để chúng phát triển xây dựng giao diện người dùng (UI).
- React cho phép kết hợp đánh dấu HTML, CSS, JavaScript và các thành phần tùy chỉnh để tạo ra một thành phần có thể hiển thị trên mỗi trang của dự án 

**Vậy công dụng chính của components là tạo ra một cách cấu trúc và quản lý ứng dụng dễ dàng hơn, với khả năng tái sử dụng và dễ bảo trì code.**

## 2. React hooks

- Trước khi ra phiên bản React 18 thì React 16.8 đã cung cấp cho chúng ta các hooks để hỗ trợ người phát triển quản lý State và các tính năng của React trong các functional components. Đồng thời giúp chúng ta tái sử dụng stateful mà trước chỉ có thể sử dụng trong class components.
- Các hooks phổ biến thường được sử dụng bao gồm useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef,

### useState được sử dụng để thêm state vào các functional components trong React. Mục đích chính của useState là giúp bạn quản lý và cập nhật trạng thái của các thành phần một cách linh hoạt và dễ dàng.

 - Quản lý state (trạng thái) trong functional components
 - Câp nhận lại UI thông cho state
 - Tương tác người dùng
 - Tạo các thành phần và tái sử dụng một cách linh hoạt

### useEffect được sử dụng để thực hiện các side effects trong functional components của React. Mục đích chính của useEffect là cho phép bạn thực hiện các tác vụ phụ thuộc vào trạng thái của component, như là tạo, cập nhật hoặc xóa các hiệu ứng bên ngoài DOM, gửi các yêu cầu HTTP ... 

 - Quản lý side effects
 - Thực hiện các tác vụ sau mỗi lần re-render
 - Xử lý lifecycle trong functional components
 - Làm sạch và giải phóng tài nguyên

### useContext truy cập các giá trị được chia sẻ từ context mà không cần thông qua việc truyền props qua nhiều cấp con của cây component.

 - Truy cập các giá trị được chia sẻ global trong ứng dụng
 - Truy cập context mà không cần truyền props qua các component trung gian
 - Giảm bớt sự phức tạp của việc quản lý state
 - Tăng tính tái sử dụng và linh hoạt
 - Tách biệt logic và giao diện người dùng

### useReducer sử dụng để quản lý state của functional components trong React. Giúp bạn quản lý state của các component một cách linh hoạt và hiệu quả, đặc biệt là khi có những logic state phức tạp cần được xử lý.

 - Quản lý state phức tạp
 - Xử lý các tác vụ phức tạp
 - Tăng tính tái sử dụng
 - Tích hợp với các tính năng của Redux
 - Cải thiện hiệu suất

### useCallback được sử dụng để memoize (lưu trữ) các hàm callback trong functional components tối ưu hóa hiệu suất của ứng dụng bằng cách tránh việc tạo ra các hàm callback mới mỗi lần component render lại.

 - Tối ưu hóa hiệu suất
 - Tránh render lại không cần thiết
 - Tránh việc tạo ra dependencies không cần thiết cho useEffect và useMemo
 - Tăng tính tái sử dụng và hiệu quả của components
 
### useMemo được sử dụng để memoize (lưu trữ) kết quả của một hàm và trả về kết quả đã được memoized đó

 - Tối ưu hóa hiệu suất
 - Tránh tính toán lại không cần thiết
 - Tối ưu hóa việc tính toán trong các kịch bản đòi hỏi
 - Tránh render lại không cần thiết
 - Tăng tính tái sử dụng và hiệu quả của components

### useRef sử dụng để tạo ra một "ref" (tham chiếu) giúp bạn truy cập các DOM elements hoặc lưu trữ các giá trị mà không gây ra việc kích hoạt lại việc render của component khi giá trị thay đổi. 

 - Truy cập DOM elements
 - Lưu trữ giá trị không gây ra việc kích hoạt lại việc render
 - Truy cập các instance của functional components
 - Thực hiện các thao tác không gây ra render lại

## 3.Phân biệt các hàm cơ bản (map, forEach, filler, reduce)

### map()

- Là một phương thức của mảng, được sử dụng để tạo ra một mảng mới bằng cách ánh xạ từng phần tử của mảng ban đầu qua một hàm callback và trả về giá trị mới của từng phần tử.

=> Hàm map() không thay đổi mảng gốc, mà trả về một mảng mới với các giá trị được xử lý.

### forEach() 

- Là một phương thức của mảng, tương tự như map(), nhưng không tạo ra một mảng mới. Thay vào đó, nó gọi một hàm callback một lần cho mỗi phần tử trong mảng và không trả về bất kỳ giá trị nào.

=> Khác với map(), hàm forEach() không trả về bất kỳ giá trị nào và chỉ thực thi hành động cho mỗi phần tử trong mảng.

### filter()

- Là một phương thức của mảng được sử dụng để tạo ra một mảng mới chứa các phần tử của mảng gốc thoả mãn một điều kiện được xác định bởi một hàm callback.

=> Hàm filter() sẽ trả về một mảng mới chứa các phần tử thoả mãn điều kiện được xác định trong hàm callback.

### reduce()

-  Hàm reduce() là một phương thức của mảng được sử dụng để thực thi một hàm reducer (hàm callback) trên từng phần tử của mảng, từ trái qua phải (ngược lại là reduceRight), để trả về một giá trị duy nhất.

=> Hàm reduce() trả về một giá trị duy nhất, kết quả của việc tích lũy các giá trị qua các lần gọi của hàm callback.

***Tóm lại, map() và filter() tạo ra các mảng mới, forEach() thực thi hành động cho mỗi phần tử mà không tạo ra mảng mới, và reduce() trả về một giá trị duy nhất.***

## 4. Cách xử lý bất đồng bộ  

- "Bất đồng bộ" ám chỉ việc thực hiện các tác vụ mà không cần chờ kết quả trả về trước khi tiếp tục thực hiện các tác vụ khác. Các tác vụ bất đồng bộ thường được thực hiện thông qua các hàm callback, promises, hoặc async/await. Điều này cho phép mã JavaScript tiếp tục thực thi các tác vụ khác trong khi các tác vụ bất đồng bộ đang chờ kết quả.

#### I. Callback Hell
- Callbacks là một phương thức cổ điển để xử lý bất đồng bộ trong JavaScript. Đây là hàm được truyền vào một hàm khác như một tham số và được gọi sau khi một tác vụ bất đồng bộ hoàn thành.
- Callbacks có thể dẫn đến tình trạng "callback hell" khi có nhiều tác vụ bất đồng bộ lồng nhau

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VH2f5KmjKwlBaEYyOmSE2g.png)

#### II. Promises

**1. Promise là đối tượng đại diện cho kết quả của hành động nào đó sẽ hoàn thành trong tương lai, kết quả trả về sẽ là resolve nếu thành công và reject nếu thất bại.**

- Sinh ra để xử lý bất đồng bộ, trước khi có promise thì dùng callback, dễ bị callback hell

**2. Một promise từ khi tạo ra tới khi kết thúc sẽ có các trạng thái (state) sau**

- Pending: promise đang thực hiện chưa xong
- Full filled: trạng thái đã thực hiện xong, kết quả thành công
- Rejected: trạng thái đã thực hiện xong, kết quả thất bại

**3. Tạo một Promise: Truyền vào một excutor function**

```js
const promise = new Promise(function (resolve, reject) {
  // Thực hiện lệnh bất đồng bộ
  if (success) resolve();
  else reject();
});
```

- Thực hiện một số lệnh, thường có một lệnh bất đồng bộ
- Gọi resolve() để báo kết quả thành công, gọi reject để báo thất bại

**4. Promise methods: all, allSelected, race, resolve, reject**

#### III. Promises with Async/Await

**Async/await được sinh ra để giúp code gọn gàng hơn.
Async/await làm cho code bất đồng bộ trở nên có vẻ giống đồng bộ, do đó dễ đọc hơn.**

- **Async/Await** là một cú pháp mới trong JavaScript ES8, cung cấp cách viết mã bất đồng bộ một cách rõ ràng và dễ đọc hơn.
- **async** được sử dụng để định nghĩa một hàm bất đồng bộ, cho phép hàm đó trả về một promise.
- **await** được sử dụng trong hàm bất đồng bộ để đợi cho một promise được giải quyết (hoặc bị từ chối), giúp tránh sự lồng ghép của các callback và giúp code trở nên rõ ràng hơn.

```js
function asyncFunction() {
  return new Promise();
}

asyncFunction()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    // Thanh cong hay Loi deu chay
  });

async function someFunction() {
  try {
    const res = await asyncFunction();
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    // Thanh cong hay Loi deu chay
  }
}
someFunction();
```

=> Mỗi phương pháp có ưu và nhược điểm riêng, và lựa chọn phụ thuộc vào nhu cầu cụ thể của dự án.