donate("dBtn1", "1");
donate("dBtn2", "2");
donate("dBtn3", "3");

document.getElementById('donatePage').addEventListener('click',function () {
    document.getElementById('donatePage').classList.add('btn-accent','bg-lime-400');
    document.getElementById('historyPage').classList.remove('btn-accent','bg-lime-400');
});
document.getElementById('historyPage').addEventListener('click',function () {
    document.getElementById('donatePage').classList.remove('btn-accent','bg-lime-400');
    document.getElementById('historyPage').classList.add('btn-accent','bg-lime-400');
});