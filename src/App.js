import { 

              <Route path="/blog" element={<BlogPage />} />

  <Route path="/village" element={<VillagePage />} />

  <Route path="/app" element={<AppsPage />} />

  <Route path="/history" element={<HistoryPage />} />
  <Route path="/photoalbum" element={<AlbumPage />} />

  <Route path="*" element={<Main />} />
            </Routes >
          </AnimatePresence >
        </Suspense >
      </ThemeProvider >
    </>
  );
}

export default App;
