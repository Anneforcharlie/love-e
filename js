// 获取页面元素
const rejectBtn = document.querySelector('.reject-btn'); // “不要”按钮
const acceptBtn = document.querySelector('.accept-btn'); // “可以”按钮
const confessionText = document.querySelector('.confession-text'); // 告白文字
const body = document.querySelector('body'); // 页面主体（用于添加弹窗）

// 1. “不要”按钮点击事件：话术不变或轻微调侃（可自定义话术）
rejectBtn.addEventListener('click', () => {
    // 切换话术（可修改为自己想写的内容，比如“姐姐是不喜欢小e吗～”）
    confessionText.textContent = "再问一次：维e会一直追随大门e吗？";
    // 可选：按钮点击时加轻微震动反馈
    rejectBtn.style.transform = "scale(0.95)";
    setTimeout(() => {
        rejectBtn.style.transform = "scale(1)";
    }, 100);
});

// 2. “可以”按钮点击事件：显示成功告白弹窗
acceptBtn.addEventListener('click', () => {
    // 创建成功弹窗元素
    const successModal = document.createElement('div');
    successModal.className = 'success-modal';
    
    // 弹窗内容（可自定义成功话术和图片）
    successModal.innerHTML = `
        <div class="success-content">
            <p class="success-text">太好了！往后余生都是你～</p>
            <img src="images/success-cat.png" alt="开心小喵" class="success-img">
        </div>
    `;
    
    // 将弹窗添加到页面，并设置显示
    body.appendChild(successModal);
    setTimeout(() => {
        successModal.style.display = "flex";
    }, 100);
    
    // 可选：禁用按钮，防止重复点击
    acceptBtn.disabled = true;
    rejectBtn.disabled = true;
});

// 3. 可选功能：页面加载时小猫图片加载失败的备用方案
const catImg = document.querySelector('.cat-img');
catImg.addEventListener('error', () => {
    // 图片加载失败时显示备用文字
    catImg.alt = "可爱小喵（图片加载失败）";
    // 也可替换为备用图片链接
    // catImg.src = "https://example.com/backup-cat.png";
});
