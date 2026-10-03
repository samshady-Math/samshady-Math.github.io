document.querySelectorAll('[data-filter]').forEach(button=>{
  button.addEventListener('click',()=>{
    const category=button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    let visible=0;
    document.querySelectorAll('.post-row').forEach(row=>{
      row.hidden=category!=='All'&&row.dataset.category!==category;
      if(!row.hidden) visible++;
    });
    const empty=document.getElementById('empty-posts');
    if(empty){empty.hidden=visible>0;empty.textContent=`No ${category.toLowerCase()} posts yet. More to come.`;}
  });
});
document.querySelectorAll('[data-sort]').forEach(button=>{
  button.addEventListener('click',()=>{
    const table=document.getElementById('pizza-table');
    const header=button.closest('th');
    const column=Number(button.dataset.sort);
    const ascending=header.getAttribute('aria-sort')!=='ascending';
    const rows=[...table.tBodies[0].rows];
    rows.sort((a,b)=>{
      const x=a.cells[column].textContent,y=b.cells[column].textContent;
      const comparison=column===2?Number(x)-Number(y):x.localeCompare(y);
      return (ascending?1:-1)*comparison;
    });
    rows.forEach(row=>table.tBodies[0].appendChild(row));
    table.querySelectorAll('th').forEach(th=>th.setAttribute('aria-sort','none'));
    header.setAttribute('aria-sort',ascending?'ascending':'descending');
    document.getElementById('sort-status').textContent=`Sorted by ${button.textContent}, ${ascending?'ascending':'descending'}.`;
  });
});
