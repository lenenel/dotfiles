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

set hidden
set tabstop=4
set shiftwidth=4
set expandtab

set hlsearch
set incsearch

set history=5000
set showcmd
set nojoinspaces
set foldlevelstart=99
set noswapfile
if has('mouse')
  set mouse=nv
endif

colorscheme rdark
