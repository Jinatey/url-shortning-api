/* eslint-disable jsx-a11y/anchor-is-valid */
import { ImCross } from 'react-icons/im';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';

const LinkItem = ({ li, delteTask, links, setLinks }) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(li.name);

  return (
    <div className='link-wrap'>
      {editing ? (
        <input
          style={{ fontSize: '1.5rem' }}
          type='text'
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <p className='pf'>{li.name}</p>
      )}

      <a href={li.shortLink} target='_blank' rel="noreferrer">{li.shortLink}</a>

      <button
        onClick={(e) => {
          navigator.clipboard.writeText(
            e.target.parentElement.querySelector('a').textContent
          );

          e.target.textContent = 'copied';
          e.target.style.backgroundColor = 'rgb(11, 11, 65)';
          setTimeout(() => {
            e.target.textContent = 'copy';
            e.target.style.backgroundColor = ' hsl(180, 66%, 49%)';
          }, 2000);
        }}
      >
        Copy
      </button>

      <ImCross
        style={{ cursor: 'pointer', color: 'red' }}
        onClick={() => delteTask(li.name)}
      />

      <FaEdit
        onClick={() => setEditing(true)}
        size={27}
        style={{ cursor: 'pointer' }}
      />

      {editing && (
        <>
          <button onClick={() => setEditing(false)}>cancle</button>

          <button
            onClick={() => {
              fetch(`https://api.shrtco.de/v2/shorten?url=${editText}`)
                .then((res) => res.json())
                .then((data) => {
                  const updatedLinks = links.map((link) =>
                    link.name === li.name
                      ? {
                          ...link,
                          name: editText,
                          shortLink: data.result.full_short_link2,
                        }
                      : link
                  );
                  setLinks(updatedLinks);
                });
            }}
          >
            save
          </button>
        </>
      )}
    </div>
  );
};

export default LinkItem;
