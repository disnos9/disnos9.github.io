 fetch('https://disnos9.github.io/content/code/dir.json')
      .then(response => response.json())
      .then(data => {
        // Process Folders
        const folderList = document.getElementById('folderList');
        data.Folders.forEach(folder => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<a href="${folder.folderURL}"><i class="material-icons blue-text text-darken-1">dashboard</i>${folder.folderName}</a>`;
          folderList.appendChild(listItem);
        });

        // Process Files
        const fileList = document.getElementById('fileList');
        data.Files.forEach(file => {
          const fileItem = document.createElement('div');
          fileItem.className = 'card-panel folder';
          fileItem.innerHTML = `<i class="material-icons left">folder</i>${file.fileName}`;
          fileList.appendChild(fileItem);
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));
