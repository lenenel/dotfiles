set langmenu=en_US.UTF-8
" language English_United States
set nocompatible
if has("autocmd")
    filetype plugin indent on
endif

if has("pathogen")
    execute pathogen#infect()
endif

set number

set tabstop=4
set shiftwidth=4
set expandtab

colorscheme rdark
